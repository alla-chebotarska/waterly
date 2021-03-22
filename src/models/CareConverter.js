import Care from "../components/Care";

export default class CareConverter {

  careToFirestore(care) {
    return {
      careId: care.careId,
      careType: care.careType,
      color: care.color,
      daysBetwenCare: care.frequency,
      lastCare: care.lastCare.setHours(0, 0, 0, 0),
      modelVersion: care.modelVersion,
    }
  }

  careFromFirestore(item) {
    return new Care();
  }
}