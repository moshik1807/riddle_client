export default class Player{
    constructor(password){
    // this.name = name
    this.password = password
    this.everageTime = 0
    this.times = []
    }
    printTimes(){
        let sumTime = 0
        for(const time of this.times){
            sumTime += time
        }
        this.everageTime = sumTime/1000/this.times.length
        console.log(`total time:${sumTime/1000},average time:${sumTime/1000/this.times.length}`)
    }
}
