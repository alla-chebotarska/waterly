import { v4 as uuidv4 } from 'uuid';

export default class Care {
    careId = uuidv4();
    color = -538362;
    modelVersion = 0;
    constructor(careType, isActive, frequency, lastCare) {
        this.careType = careType;
        this.isActive = isActive;
        this.frequency = frequency;
        this.lastCare = lastCare;
    }
}