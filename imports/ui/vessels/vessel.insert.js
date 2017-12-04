import {
    Vessels
} from '/imports/api/vessels/vessels.coffee';

import '/imports/ui/InsertForm/InsertForm.js';

Template['vessel.insert'].helpers({
    data() {
        return {
            db: Vessels,
            fields: [
                {
                    key: 'name',
                    required: true
                }, {
                    key: 'flag'
                }, {
                    key: 'type',
                    type: 'dropdown',
                    allowedValues: ['c', 'cr', 'mf', 'mt', 'p', 'pt', 'rc', 'f', 'ro', 't', 'unknown']
                }, {
                    key: 'callsign'
                }, {
                    key: 'eni'
                }, {
                    key: 'imo'
                }, {
                    key: 'mmsi'
                }
            ]
        }
    }
});
