export default class Location {
  constructor({name, pin}) {
    this.name = name;
    this.pin = pin;
  }

  static generateLocation(name, geo) {
    return {name, geo};
  }
  static schema = {
    name: 'Location',
    embedded: true,
    properties: {
      name: 'string',
      pin: 'double[]?',
    },
  };
}
