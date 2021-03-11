import Care from './Care'

export default class Plant {
    id = new Date().getMilliseconds();
    name = '';
    plantIconId = "icon1";
    constructor() {
        this.creationDate = new Date();
        this.careTypes = [
            new Care("Watering", false, 1, this.creationDate), 
            new Care("Spraying", false, 7, this.creationDate), 
            new Care("Fertilizing", false, 30, this.creationDate),
            new Care("Test", false, 5, this.creationDate),
        ];
    }
}










