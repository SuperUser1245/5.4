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
      console.log('The ap
