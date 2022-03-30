export default class Name {
  constructor({firstName, middleName = '', lastName}) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  static generateName(firstName, middleName = '', lastName) {
    return `${firstName} ${middleName} ${lastName}`;
  }

  static schema = {
    name: 'Name',
    embedded: true,
    properties: {
      firstName: 'string',
      middleName: 'string?',
      lastName: 'string',
    },
  };
}
