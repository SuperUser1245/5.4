1)function ex(obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)) {
            console.log(key);
    } 
  }
}
  

2)function ex(obj, str){
  for (let key in obj){
    if (key == str) {
      return true;
    }else{
      return false;
    } 
  }
}


3)function ex() {
    return Object.create(null);
}



4)function Parent(pluggedIn) {
  this.pluggedIn = pluggedIn || false;
}



Parent.prototype.plugIn = function() {
    if (!this.pluggedIn) {
        console.log('The appliance is turned on');
        this.pluggedIn = true;
    } else {
        console.log('The appliance is turned off');
    }
};



Parent.prototype.unplug = function() {
    if (this.pluggedIn) {
        console.log('The appliance is turned off');
        this.pluggedIn = false;
    } else {
        console.log('The appliance is turned on');
    }
};

                    
                                        
function Lamp(wattage, name, pluggedIn){
  this.wattage = wattage;
  this.name = name;
  Parent.call(this, pluggedIn);
}

function Pc(wattage, name, pluggedIn){
  this.wattage = wattage;
  this.name = name;
  Parent.call(this, pluggedIn);
}

      
Lamp.prototype = new Parent();
Pc.prototype = new Parent();  

const DellLamp = new Lamp('6w', 'dell', true);
const AsusPc = new Pc('60w', 'asus', false);
      
console.log(DellLamp.pluggedIn);
AsusPc.plugIn();
DellLamp.unplug();
console.log(DellLamp.pluggedIn);


5)class Parent {
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
