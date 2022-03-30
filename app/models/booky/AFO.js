export default class AFO {
  constructor({name, phone, avatar}) {
    this.name = name;
    this.phone = phone;
    this.avatar = avatar;
  }
  static generateAFO(name, phone) {
    return {name, phone, avatar};
  }

  static schema = {
    name: 'AFO',
    embedded: true,
    properties: {
      name: 'Name',
      phone: 'string',
      avatar: 'Attachments?',
    },
  };
}
