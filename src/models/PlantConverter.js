import Plant from "./Plant";
import CareConverter from '../models/CareConverter';


export default class PlantConverter{

    constructor(){
        this.careConverter = new CareConverter();
    }

    plantToFirestore(plant) {
        return {
          cares: plant.careTypes.filter(care => care.isActive).map(care => this.careConverter.careToFirestore(care)),
          creationDate: plant.creationDate,
          imageName: plant.plantIconId,
          modelVersion: 0,
          name: plant.name,
          plantId: plant.id,
        }
      }

      plantFromFirestore(plant){
          return new Plant();
      }
    
}