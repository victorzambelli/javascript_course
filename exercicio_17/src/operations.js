module.exports = {
    get AU_IN_KM() { return 149587870 },

    convertAuToKm(quantityAU) {
        return quantityAU * this.AU_IN_KM
    }
}