import Care from './Care';
import { v4 as uuidv4 } from 'uuid';

export default class Plant {
    id = uuidv4();
    name = '';
    plantIconId = 'icon1';
    constructor() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        this.creationDate = date;
        this.careTypes = [
            new Care("Watering", false, 1, new Date()), 
            new Care("Spraying", false, 7, new Date()), 
            new Care("Fertilizing", false, 30, new Date()),
            new Care("Test", false, 5, new Date()),
        ];
    }

    static plantOf(id, creationDate, name, plantIconId, careTypes) {
        let p = new Plant();
        p.id = id;
        p.name = name;
        p.plantIconId = plantIconId;
        p.creationDate = creationDate;
        p.careTypes = careTypes;
        return p;
    }

}









