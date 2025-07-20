import promptSync from 'prompt-sync';
const input = promptSync();
import Player from './models/PlayerClass.js'
import Riddel from './models/RiddleClass.js'


async function getRiddleByLevel() {
    let level = ""
    while(level !== 'easy' && level !== 'medium' && level !== 'hard'){
        level = input('enter level:easy , medium, or hard ').trim();
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    const arrayRiddle = await fetch(`http://localhost:2123/riddle/getByLevel?level=${level}`)
    const data = await arrayRiddle.json()
    return data
}


function creatRiddleObj(riddles) {
    if (riddles.length !== 0) {
        let newArrayRiddle = riddles.map(r => new Riddel(r))
        return newArrayRiddle
    }
    console.log("no riddles")
}


export default async function game() {
    let riddles = await getRiddleByLevel();
    let riddlesObj = creatRiddleObj(riddles)
    let PlayerName = input('enter your name: ')
    const player = new Player(PlayerName)
    for (const ridd of riddlesObj) {
        ridd.startTime()
        ridd.ask()
        ridd.endTime(player)
    }
    player.printTimes()
    await new Promise(resolve => setTimeout(resolve, 1000))
    try {
        const response = await fetch('http://localhost:2123/player/updeatPlayers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        })
        if (response.ok) {
            console.log(await response.text())
        } else {
            console.log('Server responded with error:', response.status)
        }
    } catch (error) {
        console.error('Failed to save player data:', error.message)
    }
}
