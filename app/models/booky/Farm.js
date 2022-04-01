export default class Farm {
  constructor({size, location, unit = 'acre', attachments}) {
    this.size = size;
    this.unit = unit;
    this.location = location;
    this.attachments = attachments;
  }

  static generateFarm(size, unit, location, attachments) {
    return {
      size,
      unit,
      location,
      attachments,
    };
  }
  static schema = {
    name: 'Farm',
    embedded: true,
    properties: {
      size: 'int',
      unit: 'string',
      location: 'Location?',
      attachments: 'Attachments?',
    },
  };
}
