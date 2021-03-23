import Care from "./Care";

export default class CareConverter {

  careToFirestore(care) {
    return {
      careId: care.careId,
      careType: care.careType,
      daysBetwenCare: care.frequency,
      lastCare: care.lastCare.setHours(0, 0, 0, 0),
      isActive: care.isActive,
    }
  }

  careFromFirestore(care) {
    return Care.careOf(care.careId, care.careType, care.daysBetwenCare, new Date(care.lastCare), care.isActive);
  }
}