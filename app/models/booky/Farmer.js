export default class Farmer {
  constructor({id = new Realm.BSON.ObjectId(), partition, name, phone, farm}) {
    this._id = id;
    this._partition = partition;
    this.name = name;
    this.phone = phone;
    this.farm = farm;
  }

  static generateFarmer(name, phone, farm) {
    return {
      name,
      phone,
      farm,
    };
  }
  static schema = {
    name: 'Farmer',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      name: 'Name',
      phone: 'string',
      farm: 'Farm',
      attachments: 'Attachments',
      visits: 'Report[]',
    },
  };
}
