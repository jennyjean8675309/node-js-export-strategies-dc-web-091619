"use strict";

class Lamp {
    constructor(maxBrightness) {
        this.currentBrightness = 0
        this.maxBrightness = maxBrightness
    } 
}

Lamp.prototype.brighten = function(amount) {
    amount = amount || 1;

    this.currentBrightness += amount

    if (this.currentBrightness > this.maxBrightness) {
        this.currentBrightness = this.maxBrightness
    }

    return this.currentBrightness
}

Lamp.prototype.dim = function(amount) {
    amount = amount || 1;

    this.currentBrightness -= amount

    if (this.currentBrightness < 0) {
        this.currentBrightness = 0
    }

    return this.currentBrightness
}

Lamp.prototype.turnOff = function() {
    this.currentBrightness = 0;
    return this.currentBrightness
}

Lamp.prototype.turnOn = function() {
    this.currentBrightness = this.maxBrightness;
    return this.currentBrightness
}

module.exports = Lamp

