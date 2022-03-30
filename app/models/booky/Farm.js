export default class Farm {
  constructor({size, location, unit = 'acre'}) {
    this.size = size;
    this.unit = unit;
    this.location = location;
  }

  static generateFarm(size, unit) {
    return {
      size,
      unit,
      location,
    };
  }
  static schema = {
    name: 'Farm',
    embedded: true,
    properties: {
      size: 'int',
      unit: 'string',
      location: 'Location',
      attachments: 'Attachments',
    },
  };
}
