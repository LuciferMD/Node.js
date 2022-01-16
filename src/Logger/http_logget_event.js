class Event {
    constructor() {
      this.path = 'Unknown path';
      this.method = 'Unknown method';
      this.level = 'Unknown level';
      this.message = 'Unknown message';
      this.date = new Date();
    }
  
    toString() {
      return `${this.method}: ${this.path} (${this.level}) "${this.message}" on ${this.date}`;
    }
  };
  
  module.exports = Event;