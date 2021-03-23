import { v4 as uuidv4 } from 'uuid';

export default class Care {
    careId = uuidv4();
    modelVersion = 0;
    constructor(careType, isActive, frequency, lastCare) {
        this.careType = careType;
        this.isActive = isActive;
        this.frequency = frequency;
        this.lastCare = lastCare;
    }

    static careOf(careId, careType, frequency, lastCare, isActive) {
        const care = new Care();
        care.careId = careId;
        care.careType = careType;
        care.frequency = frequency;
        care.lastCare = lastCare;
        care.isActive = isActive;
        return care;
    }
}