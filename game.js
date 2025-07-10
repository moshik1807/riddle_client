import promptSync from 'prompt-sync';
const input = promptSync();
import Player from './models/PlayerClass.js'
import Riddel from './models/RiddleClass.js'



async function creatRiddleObj(a) {
    if (a.length !== 0) {
        let newArrayRiddle = a.map(r => new Riddel(r))
        return newArrayRiddle
    }
    console.log("no riddles")
}


function riddleByLevel(readyRiddle) {
    const level = input("enter level:easy , medium , or hard  ")
    const arrayRiddle = readyRiddle.filter((riddle) => riddle.level === level)
    return arrayRiddle
}


export default async function game(){
    const arrayRiddle = await fetch('http://localhost:2123/riddle/getAll')
    const newArrayRiddle = await arrayRiddle.json()
    const readyRiddle = await creatRiddleObj(newArrayRiddle)
    const RiddleByLevel = riddleByLevel(readyRiddle)
    const PlayerName = input('enter your name: ')
    const player = new Player(PlayerName)
    for (const ridd of RiddleByLevel) {
        ridd.startTime()
        ridd.ask()
        ridd.endTime(player)
    }
    player.printTimes()
    console.log(player);
    await fetch('http://localhost:2123/player/updeatPlayers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
    })
}
