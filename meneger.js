import * as riddleService from './services/riddleService.js'

async function getAllRiddles(){
    const response = await fetch('http://localhost:2123/riddle/getAll')
    const riddles = await response.json()
    console.log(riddles)
    return riddles
}


async function addRiddle(){
    const allRiddles = await getAllRiddles()
    const newRiddle = riddleService.creatRiddleObj(allRiddles)
    fetch('http://localhost:2123/riddle/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newRiddle)
    })
}

addRiddle()