import { R } from './variables.coffee'

export Helpers =

	pendingToParticipants: (shiftId, teamId, userId, teamleader) ->
		user = {}

		# User verschieben
		for team in R.teams when team.shiftId == shiftId && team._id == teamId

			# Userdaten holen
			for u in team.pending when u._id == userId
				user = u

			user.thisTeamleader = teamleader

			team['participants'].push user

			for userItem, index in team['pending'] when userItem._id == userId
				team['pending'].splice index, 1
				break

		# Acceptions erhöhen
		R.users[userId].acceptions += 1

		# Schicht in confirmations Array aufnehmen
		if user.thisTeamleader
			R.users[userId].tlConfirmations.push shiftId: shiftId, teamId: teamId
		else
			R.users[userId].confirmations.push shiftId: shiftId, teamId: teamId

		# Ratio errechnen
		R.users[userId].targetAcceptionRatio = R.users[userId].acceptions / R.users[userId].targetPeriod

	participantsToPending: (shiftId, teamId, userId) ->
		user = {}

		# User verschieben
		for team in R.teams when team.shiftId == shiftId && team._id == teamId

			# Userdaten holen
			for u in team.participants when u._id == userId
				user = u

			team['pending'].push user

			for userItem, index in team['participants'] when userItem._id == userId
				team['participants'].splice index, 1
			break

		# Acceptions senken
		R.users[userId].acceptions -= 1

		# Schicht aus teamleader confirmations Array entfernen
		for tlConfirmation, index in R.users[userId].tlConfirmations
			if tlConfirmation.shiftId = shiftId && tlConfirmation.teamId = teamId
				R.users[userId].tlConfirmations.splice index, 1

		# Schicht aus confirmations Array entfernen
		for confirmation, index in R.users[userId].confirmations
			if confirmation.shiftId = shiftId && confirmation.teamId = teamId
				R.users[userId].confirmations.splice index, 1

		# Ratio errechnen
		R.users[userId].targetAcceptionRatio = R.users[userId].acceptions / R.users[userId].target

	searchChangeables: (userId) ->

		foundUsers = []
		runCondition = true
		i = 0

		# Aktuellen User in foundUsers aufnehmen
		foundUsers.push _id: userId, way: []

		while runCondition
			if foundUsers.length <= i
				runCondition = false
			else
				foundUser = foundUsers[i]

				for team in R.users[foundUser._id].confirmations
					team = (R.teams.filter (t) -> t._id == team.teamId && t.shiftId == team.shiftId)[0]

					# User in foundUsers aufnehmen, wenn noch nicht geschehen
					for rUser in team.pending when rUser._id not in foundUsers
						foundUsers.push
							_id: rUser._id
							way: foundUser.way.concat [
								shiftId: shift._id
								teamId: team._id
								fromId: foundUser._id
								toId: rUser._id
							]
					i++
		foundUsers

	searchTeamleaderChangeables: (userId) ->

		foundUsers = []
		runCondition = true
		i = 0

		# Aktuellen User in foundUsers aufnehmen
		foundUsers.push _id: userId, way: []

		while runCondition
			if foundUsers.length <= i
				runCondition = false
			else
				foundUser = foundUsers[i]

				# Alle Teams durchgehen, wo er schon als Teamleiter angenommen ist
				for team in R.users[foundUser._id].tlConfirmations
					team = (R.teams.filter (t) -> t._id == team.teamId && t.shiftId == team.shiftId)[0]

					for rUser in team.pending when (rUser.teamleader || rUser.substituteTeamleader) && !this.getMaxReachedDay rUser, team
						# User in foundUsers aufnehmen, wenn noch nicht geschehen
						if rUser._id not in foundUsers
							foundUsers.push
								_id: rUser._id
								way: foundUser.way.concat [
									shiftId: team.shiftId
									teamId: team._id
									fromId: foundUser._id
									toId: rUser._id
								]
			i++

		foundUsers.splice 0, 1
		foundUsers

	countAbandonedTeamsTl: ->

		count = 0

		# Teams zählen, die einen möglichen Teamleiter haben
		for team in R.teams
			hasTeamleader = false

			for user in team.participants when user.teamleader || user.substituteTeamleader
				hasTeamleader = true

			if !hasTeamleader
				count++
		count

	countAbandonedTeamsUsers: ->

		# Teams zählen, die weniger angenommene Bewerbungen haben, als notwendig
		(R.teams.filter (team) -> team.participants.length < team.min).length

	getAverageDeviationRatioTl: ->

		teamleaders = []
		sumDeviation = 0
		averageRatio = this.getAverageRatioTl()

		for userId in Object.keys(R.users) when R.users[userId].teamleader || R.users[userId].substituteTeamleader
			teamleaders.push R.users[userId]

			if R.users[userId].targetAcceptionRatio > averageRatio
				sumDeviation += R.users[userId].targetAcceptionRatio - averageRatio
			else if R.users[userId].targetAcceptionRatio < averageRatio
				sumDeviation += averageRatio - R.users[userId].targetAcceptionRatio

		sumDeviation / Object.keys(teamleaders).length

	getAverageDeviationRatioAll: ->

		sumDeviation = 0
		averageRatio = this.getAverageRatioAll()

		for userId in Object.keys R.users
			if R.users[userId].targetAcceptionRatio > averageRatio
				sumDeviation += R.users[userId].targetAcceptionRatio - averageRatio
			else if R.users[userId].targetAcceptionRatio < averageRatio
				sumDeviation += averageRatio - R.users[userId].targetAcceptionRatio

		sumDeviation / Object.keys(R.users).length

	getAverageRatioTl: ->
		sumRatio = 0
		teamleaders = []

		for userId in Object.keys(R.users) when R.users[userId].teamleader || R.users[userId].substituteTeamleader
			teamleaders.push R.users[userId]
			sumRatio += R.users[userId].targetAcceptionRatio

		sumRatio / Object.keys(teamleaders).length

	getAverageRatioAll: ->
		sumRatio = 0

		for userId in Object.keys R.users
			sumRatio += R.users[userId].targetAcceptionRatio

		sumRatio / Object.keys(R.users).length

	getMaxReachedDay: (user, team) ->

		maxReachedDay = false
		confirmationsThisDay = []

		# Alle angenommenen Bewerbungen dieses Tages zusammenfassen
		for cTeam in R.users[user._id].confirmations when team.date == (R.shifts.filter (shift) -> shift._id == cTeam.shiftId)[0].date

			# Schicht in confirmationsThisDay aufnehmen, wenn noch nicht gemacht
			if (confirmationsThisDay.filter (confirmation) -> confirmation.shiftId == cTeam.shiftId).length == 0
				confirmationsThisDay.push cTeam

		# Anzahl der angenommenen Bewerbungen und ggf. auf Doppelschicht prüfen
		if confirmationsThisDay.length == 1
			if user.maxDay == 1
				if !R.doubleShiftAllowed
					maxReachedDay = true
				else if R.shifts[confirmationsThisDay[0].shiftId].start != team.end && R.shifts[confirmationsThisDay[0].shiftId].end != team.start
					maxReachedDay = true
		else if confirmationsThisDay.length > 1 && confirmationsThisDay.length >= user.maxDay
			maxReachedDay = true

		maxReachedDay
