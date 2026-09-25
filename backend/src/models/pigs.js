// Pig model

function createPigModel(tagNumber, breed, gender, birthDate, currentWeight, estimated_weight, status, photoUrl, notes) {
    return { tagNumber, breed, gender, birthDate, currentWeight, estimated_weight, status, photoUrl, notes };
}

module.exports = { createPigModel };