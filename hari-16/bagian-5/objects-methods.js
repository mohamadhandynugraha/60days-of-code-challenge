let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // seat party
    seatParty: function (guestSize) {
        return this.guestCount += guestSize
    },
    // removeParty
    removeParty: function (guestSize){
        return this.guestCount -= guestSize
    }
}


console.log(restaurant.seatParty(72))
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(4)
console.log(restaurant.checkAvailability(4))