import * as riddleService from './services/riddleService.js'

async function getAllRiddles(){
    const response = await fetch('http://localhost:2123/riddle/getAll')
    const riddles = await response.json()
    return riddles
}

async function printAllRiddles(){
    const response = await getAllRiddles()
    console.log(response)
}


async function addRiddle(){
    const allRiddles = await getAllRiddles()
    const newRiddle = riddleService.creatRiddleObj(allRiddles)
    await fetch('http://localhost:2123/riddle/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newRiddle)
    })
}


async function deleteRiddleById(){
    const id = riddleService.getIdFromeUser()
    await fetch('http://localhost:2123/riddle/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id) 
})
}

async function updeateRiddle(){
    const updeat = await riddleService.updeatRid()
    await fetch('http://localhost:2123/riddle/updeate', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updeat)
})
}

updeateRiddle()