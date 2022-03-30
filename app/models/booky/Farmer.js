export default class Farmer {
  constructor({name, phone}) {
    this.name = name;
    this.phone = phone;
  }

  static generateFarmer(name, phone) {
    return {
      name,
      phone,
    };
  }
  static schema = {
    name: 'Farmer',
    embedded: true,
    properties: {
      name: 'Name',
      phone: 'string',
      attachments: 'Attachments',
    },
  };
}
