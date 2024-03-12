class Parent {
  constructor(pluggedIn) {
    this.pluggedIn = pluggedIn || false;
  }

  plugIn() {
    if (!this.pluggedIn) {
      console.log('The appliance is turned on');
      this.pluggedIn = true;
    } else {
      console.log('The appliance is already turned on');
    }
  }

  unplug() {
    if (this.pluggedIn) {
      console.log('The appliance is turned off');
      this.pluggedIn = false;
    } else {
      console.log('The appliance is already turned off');
    }
  }
}

class Lamp extends Parent {
  constructor(wattage, name, pluggedIn) {
    super(pluggedIn);
    this.wattage = wattage;
    this.name = name;
  }
}

class Pc extends Parent {
  constructor(wattage, name, pluggedIn) {
    super(pluggedIn);
    this.wattage = wattage;
    this.name = name;
  }
}

const DellLamp = new Lamp('6w', 'dell', true);
const AsusPc = new Pc('60w', 'asus', false);

console.log(DellLamp.pluggedIn);
AsusPc.plugIn();
DellLamp.unplug();
console.log(DellLamp.pluggedIn);

