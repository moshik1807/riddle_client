import promptSync from 'prompt-sync';
const input = promptSync();
import * as importFile from './imports.js'


async function creatRiddleObj(a) {
    // const x = await importFile.readText()
    if (x.length !== 0) {
        let newArrayRiddle = x.map(r => new importFile.Riddel(r))
        return newArrayRiddle
    }
    console.log("no riddles")
}


function riddleByLevel(readyRiddle) {
    const level = input("enter level:easy , medium , or hard  ")
    const arrayRiddle = readyRiddle.filter((riddle) => riddle.level == level)
    return arrayRiddle
}


function Game(arrayRiddle, player) {
    for (const ridd of arrayRiddle) {
        ridd.startTime()
        ridd.ask()
        ridd.endTime(player)
    }
    player.printTimes()
    importFile.playerService.playerMeneger(player)
}


const readyRiddle = await creatRiddleObj()
const RiddleByLevel = riddleByLevel(readyRiddle)
const PlayerName = input('enter your name: ')
const player = new importFile.Player(PlayerName)
Game(RiddleByLevel, player)

async function game(a){
    const readyRiddle = await creatRiddleObj(a)
    const RiddleByLevel = riddleByLevel(readyRiddle)
    const PlayerName = input('enter your name: ')
    const player = new importFile.Player(PlayerName)
    for (const ridd of RiddleByLevel) {
        ridd.startTime()
        ridd.ask()
        ridd.endTime(player)
    }
    player.printTimes()
    importFile.playerService.playerMeneger(player)
}