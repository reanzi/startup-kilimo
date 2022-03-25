import {Realm, createRealmContext} from '@realm/react';

export class Farmer {
  constructor({id = new Realm.BSON.ObjectId(), name, phone, crops}) {
    this.name = name;
    this.phone = phone;
    this.crops = crops;
    this.createdAt = new Date();
    this._id = id;
    this._partition = 'PUBLIC';
  }

  static schema = {
    name: 'Farmer',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      name: 'string',
      phone: 'string',
      isActive: {type: 'bool', default: true},
      createdAt: 'date',
      crops: 'string',
    },
  };
}

// To use a class as a Realm object type, define the object schema on
// the static property "schema".
//
// also creating a relationship back to the parent project using the linkingObjects
// which in this case will be an array of one element, which is the parent. It looks
// weird in the code but in works
// https://docs.mongodb.com/realm/sdk/react-native/examples/define-a-realm-object-model/#define-relationship-properties
// https://stackoverflow.com/questions/69711011/is-there-a-way-to-present-one2many-relation-in-correct-way-in-realm
