export default class Crop {
  constructor({name, seed}) {
    this.name = name;
    this.seed = seed;
  }

  static generateCrop(name, seed) {
    return {
      name,
      seed,
    };
  }
  static schema = {
    name: 'Crop',
    embedded: true,
    properties: {
      name: 'Name',
      seed: 'Seed?',
      attachments: 'Attachments',
    },
  };
}
