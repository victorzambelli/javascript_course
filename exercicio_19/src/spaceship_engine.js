export default class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }
    
    async checkCurrentCharge() {
        const currentCharge = this.spaceship.currentPercentCharge()
        if (currentCharge < 30) {
            return Promise.reject(`Carga em apenas ${currentCharge}%`)
        }
        
        return currentCharge
    }

    async turnOn() {
        try {
            let checkCharge = await this.checkCurrentCharge()
            console.log(`${this.spaceship.name} Partida autorizada! Carga atual em: ${checkCharge.toFixed()}%`);
        } catch (error) {
            console.log(`${this.spaceship.name} Partida não autorizada! ${error}`);
        }
    }
}