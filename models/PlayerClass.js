export default class Player{
    constructor(name,password){
    this.name = name
    this.password = password
    this.everegTime = 0
    this.times = []
    }
    printTimes(){
        let sumTime = 0
        for(const time of this.times){
            sumTime += time
        }
        this.everegTime = sumTime/1000/this.times.length
        console.log(`total time:${sumTime/1000},average time:${sumTime/1000/this.times.length}`)
    }
}
