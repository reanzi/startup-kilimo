import {Realm, createRealmContext} from '@realm/react';

export class Report {
  constructor({
    id = new Realm.BSON.ObjectId(),
    activity,
    farmer,
    crops,
    cropHealth,
    afo,
    notes,
    draft = false,
  }) {
    this.createdAt = new Date();
    this._id = id;
    this._partition = 'PUBLIC';
    this.activity = activity;
    this.farmer = farmer;
    this.crops = crops;
    this.cropHealth = cropHealth;
    this.afo = afo; // afo => active user
    this.notes = notes;
    this.draft = draft;
  }

  static schema = {
    name: 'Report',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      createdAt: 'date',
      // activity: 'Activity',
      // cropHealth: 'CropHealth',
      // notes: 'Notes[]',
      farmer: 'Farmer',
      farm: 'Farm',
      crops: 'Crops[]',
      afo: 'AFO',
      draft: 'boolean',
      farmer: {
        type: 'linkingObjects',
        objectType: 'Farmer',
        property: 'visits',
      },
    },
  };
}
