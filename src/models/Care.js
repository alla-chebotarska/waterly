import { v4 as uuidv4 } from 'uuid';

export default class Care {
    careId = uuidv4();
    modelVersion = 0;
    constructor(careType, isActive, frequency, lastCare) {
        lastCare.setHours(0,0,0,0);
        this.careType = careType;
        this.isActive = isActive;
        this.frequency = frequency;
        this.lastCare = lastCare;
    }

    static careOf(careId, careType, frequency, lastCare, isActive) {
        const care = new Care(careType, isActive, frequency, lastCare);
        care.careId = careId;
        return care;
    }
}