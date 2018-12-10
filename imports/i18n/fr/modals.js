const modal = {
  close: 'Fermer',
  addParticipant: {
    title: 'Add participant',
    noUsers: 'No available users found',
    description: 'Please choose the publisher you want to add to this shift.',
    submit: 'Add',
    alreadyRequested: 'This user has already requested participation',
    alreadyParticipating: 'This user is already participating',
    available_users: 'Available Publisher',
    all_users: 'Other Publisher',
    select: 'Select Publisher'
  },
  addVessel: {
    title: 'Ajoute un bateau',
    action: 'Bateau ajouté'
  },
  addWeek: {
    title: 'Créer une nouvelle semaine',
    noTemplate: 'Sélectionne d\'abord un modèle',
    defineTemplate: 'Modèle sélectionné',
    action: 'Créer une semaine',
    text: {
      top: 'Choose a week, that the template week will get applied to:',
      bottom: 'Choose the template week:'
    }
  },
  cancelTeam: {
    title: 'Cancel team',
    text: 'Describe why this team has to be cancelled. All participants will get this message via the cancellation mail.',
    action: 'Cancel team'
  },
  copyShift: {
    title: 'Copy shift',
    text: 'Just select the days to which you want to copy this shift.',
    action: 'Copy shift'
  },
  editPermissions: {
    title: 'Manage {{0}}\'s permissions',
    projectPermissions: 'Project permissions',
    projectRole: 'Project role',
    tagPermissions: 'Tag roles',
    explanations: 'Explanations',
    helpText: {
      admin: 'The project manager role is the highest authorization level. A project manager is allowed to control everything. For every project there has to be at least one project manager.',
      shiftScheduler: 'The shift scheduler has the permissions of a participant but can also schedule shifts.',
      shiftAdmin: 'The shift manager has the permissions of a shift scheduler but can also create, change and delete shifts.',
      storeAdmin: 'The store manager has the permissions of a participant but can also view the shift reports and edit the store.',
      member: 'The member is the most basic role. He is allowed to view the Information Center.',
      teamleader: 'The team leader once assigned by a project manager to a certain tag is then in charge of the shift team report for said tag.',
      substituteTeamleader: 'A substitute team leader has the same permissions as a normal team leader. But if the system shall schedule automatically, it will always prefer the request of a normal team leader if there is one.',
      participant: 'The participant can see and request shifts of assigned tags.',
      nothing: 'With "None" the user cannot see or request shifts of this tag. Neither can he be scheduled into a shift.'
    }
  },
  editShift: {
    title: 'Edit shift information',
    mainData: 'Main Details',
    tag: 'Tag',
    team: 'Team',
    teams: 'Teams assigned to this shift',
    helpText: {
      tag: 'Set this shift tag. All users with permissions on this tag can view the shift.',
      scheduling: 'With \'approve immediately\' requests will be approved automatically, when the minimum participant limit for the next team is reached.'
    },
    addTeam: 'Add a new team',
    teamMin: 'Minimum participants:',
    teamMax: 'Maximum participants:',
    teamStart: 'Start:',
    teamEnd: 'End:',
    teamPlace: 'Place:',
    removeTeam: 'Remove this team',
    noMeeting: 'No Meeting',
    action: 'Action:',
    delete: 'Delete',
    switch: 'Schedule shift',
    copyShift: 'Copy shift'
  },
  editTeamPicture: {
    title: 'Change team picture',
    currentPicture: 'Current Picture:',
    hints: 'This picture will probably be displayed larger for the publisher.',
    noPictureUploaded: 'You have not yet uploaded any picture',
    upload: 'Upload',
    delete: 'Delete'
  },
  editMeetingPicture: {
    title: 'Change meeting point picture',
    currentPicture: 'Current Picture:',
    hints: 'This picture will probably be displayed larger for the publisher.',
    noPictureUploaded: 'You have not yet uploaded any picture',
    upload: 'Upload',
    delete: 'Delete'
  },
  editVessel: {
    title: 'Edit vessel',
    action: 'Save changes'
  },
  inviteUser: {
    title: 'Invite new Publishers',
    key: '<span class="text-warning">Orange name</span> means user is already invited.',
    selectAll: 'Select All',
    noUsers: 'No new Publishers found',
    invite: 'Invite'
  },
  position: {
    title: 'Mark position with left mouse click'
  },
  shift: {
    collapseTeam: 'Collapse Route and Meeting points',
    expandTeam: 'Expand Route and Meeting point',
    noParticipants: 'No participants',
    requestTeam: 'Request participation',
    requestTeamAgain: 'Request participation again',
    requests: 'Requests',
    cancelRequest: 'Cancel request',
    cancelParticipation: 'Cancel participation',
    addParticipant: 'Add participant',
    unknownAge: 'Unknown age',
    closedTeam: 'This team is closed. You can\'t request participation.',
    maximumReached: 'Maximum limit for team participants was already reached',
    noPermission: 'You don\'t have permission to schedule users',
    noTeamleader: 'This user doesn\'t have permission to be a team leader',
    alreadyTeamleader: 'This user is already team leader',
    openTeam: 'Open team',
    closeTeam: 'Close team',
    switch: 'Edit shift',
    existingTeamleaders: 'Team leader exists',
    noExistingTeamleader: 'Team leader missing'
  },
  shiftReport: {
    title: 'Report',
    teamleader: 'Team leader',
    substituteTeamleader: 'Substitute team leader',
    publications: 'Publications',
    occurrences: 'Occurrences',
    store: 'Store',
    experiences: 'Experiences',
    present: 'Present',
    sick: 'Sick',
    missing: 'Missing',
    name: 'Name',
    language: 'Language',
    count: 'Count',
    action: 'Action',
    noPublications: 'No publications here',
    select_publication: 'Select a publication',
    selectPublicationFirst: 'Please select a publication first',
    addItem: 'Add this publication',
    removeItem: 'Remove this publication',
    texts: 'Bible Texts',
    speaks: 'Conversations',
    videos: 'Shown Videos',
    website: 'Website shown',
    returnVisits: 'Return Visits',
    bibleStudies: 'Bible Studies',
    time: 'Hours of Service',
    trolleysFilled: 'Trolleys were filled',
    neatnessLast: 'Trolley condition after last Shift',
    bad: 'Bad',
    normal: 'Normal',
    good: 'Good',
    yes: 'Yes',
    no: 'No',
    expRoute: 'Route',
    expGood: 'Nice Experiences',
    expProblems: 'Problems / Difficulties',
    date: 'Date',
    toShift: 'To the shift',
    pages: {
      publisher: 'Publisher page',
      items: 'Placed publications page',
      occurrences: 'Happened occurrences',
      store: 'About the store room',
      experiences: 'Your experiences',
      prevPage: 'Go to the previous page',
      nextPage: 'Go to the next page',
      finish: 'Finish this report'
    }
  },
  route: {
    title: 'Create/edit route',
    routeMarkers: 'Route marker',
    addRouteMarkers: 'Click on the map to add a new route marker'
  },
  uploadUserFile: {
    title: 'User-File upload',
    helpText: 'Order of personal data (* fields are required): <br> Email*, First name*, Last name*, Gender(m or w)*, Phone number, Privilege of service (\'publisher\', \'auxiliary\', \'regular\', \'special\', \'circuit\', \'bethelite\' or \'ldc\'), Ministry privilege (\'publisher\', \'servant\', \'elder\', \'coordinator\', \'secretary\' or \'serviceOverseer\'), Congregation, Account Language (\'en\', \'de\', ...)',
    helpEncoding: 'The file has to be UTF-8 encoded to support all characters',
    uploadFile: 'Upload CSV-File',
    new: 'New Publishers',
    existing: 'Publishers with JW Management Account',
    name: 'Name',
    email: 'Email',
    add: 'Add Users'
  },
  mergeAccounts: {
    title: 'Merge accoutns',
    description: 'Enter the credentials of the account in which you want to merge this account\'s permissions. You will be logged in into that account right away.',
    username: 'Username',
    password: 'Password',
    merge: 'Merge accounts'
  }
}

export default modal