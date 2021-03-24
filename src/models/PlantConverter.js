import Plant from "./Plant";
import CareConverter from '../models/CareConverter';


export default class PlantConverter{

    careConverter = new CareConverter();

    plantToFirestore(plant) {
        return {
          cares: plant.careTypes.map(care => this.careConverter.careToFirestore(care)),
          creationDate: plant.creationDate.getTime(),
          imageName: plant.plantIconId,
          modelVersion: 0,
          name: plant.name,
          plantId: plant.id,
        }
      }

      plantFromFirestore(item){
        let cares = item.cares.map(care => this.careConverter.careFromFirestore(care));
        return Plant.plantOf(item.plantId, new Date(item.creationDate), item.name, item.imageName, cares);
      }
}