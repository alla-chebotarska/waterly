import Care from './Care';
import { v4 as uuidv4 } from 'uuid';

export default class Plant {
    id = uuidv4();
    creationDate = new Date().setHours(0, 0, 0, 0);
    name = '';
    plantIconId = "icon1";
    constructor() {
        this.careTypes = [
            new Care("Watering", false, 1, new Date()), 
            new Care("Spraying", false, 7, new Date()), 
            new Care("Fertilizing", false, 30, new Date()),
            new Care("Test", false, 5, new Date()),
        ];
    }
}










