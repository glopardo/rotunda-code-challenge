export class Animal {
    constructor(sound) {
        this.sound = sound
    }
    speak(phrase) {
        if (!phrase) {
            console.log(`Got nothin' to say`)
            return
        }
        console.log(phrase.replace(/ /g, ` ${this.sound} `), this.sound)
    }
}