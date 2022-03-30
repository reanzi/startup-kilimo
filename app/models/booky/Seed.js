export default class Seed {
  contructor({name, type, amount, location}) {
    this.name = name;
    this.type = type;
    this.amount = amount;
    this.location = location;
  }

  static generateSeed(name, type, amount) {
    return {
      name,
      type,
      amount,
    };
  }
  static schema = {
    name: 'Seed',
    embedded: true,
    properties: {
      name: 'string',
      amount: 'Amount',
      type: {type: 'string', enum: ['kisasa, kienyeji'], default: 'kisasa'},
    },
  };
}
