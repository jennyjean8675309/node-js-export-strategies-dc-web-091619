const Decor = require("./lamp.js")
const powerEvents = require("./power")
const powerLimits = require("./power_limits")

console.log(powerLimits.type)
console.log(powerLimits.maxBrightness)

const myLamp = new Decor(10)

console.log("Turning my lamp on...")

myLamp.turnOn();

console.log(`My lamp's current brightness: ${myLamp.currentBrightness}`)

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

console.log("Turning my lamp on...")

myLamp.turnOn();

console.log(`My lamp's current brightness: ${myLamp.currentBrightness}`)
