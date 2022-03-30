export default class Amount {
  contructor({quantity, unit}) {
    this.quantity = quantity;
    this.unit = unit;
  }
  static generateAmount(quantity, unit) {
    return {
      quantity,
      unit,
    };
  }

  static schema = {
    name: 'Amount',
    embedded: true,
    properties: {
      quantity: 'float',
      unit: 'string',
    },
  };
}
