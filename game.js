import promptSync from 'prompt-sync';
const input = promptSync();
import Player from './models/PlayerClass.js'
import Riddel from './models/RiddleClass.js'


async function getRiddleByLevel(){
    const level = input('enter level:easy , medium, or hard ')
    const arrayRiddle = await fetch(`http://localhost:2123/riddle/getByLevel?level=${level}`)
    const data = arrayRiddle.json()
    return data
}

function creatRiddleObj(riddles) {
    if (riddles.length !== 0) {
        let newArrayRiddle = riddles.map(r => new Riddel(r))
        return newArrayRiddle
    }
    console.log("no riddles")
}


export default async function game(){
    const riddles = await  getRiddleByLevel()
    const riddlesObj = creatRiddleObj(riddles)
    const PlayerName = input('enter your name: ')
    const player = new Player(PlayerName)
    for (const ridd of riddlesObj) {
        ridd.startTime()
        ridd.ask()
        ridd.endTime(player)
    }
    player.printTimes()
    try {
        const playerData = {
            name: player.name,
            everegTime: player.everegTime,
            times: player.times
        }        
        const response = await fetch('http://localhost:2123/player/updeatPlayers', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Connection': 'close' // סוגר את החיבור אחרי הבקשה
            },
            body: JSON.stringify(playerData),
        })
        if (response.ok) {
            console.log('Player data saved successfully!')
        } else {
            console.log('Server responded with error:', response.status)
        }
    } catch (error) {
        console.error('Failed to save player data:', error.message)
    }}