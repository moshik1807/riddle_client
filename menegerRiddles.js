import * as riddleService from './services/riddleService.js'
import fs from 'fs/promises';
const token = await fs.readFile('cookies.txt', 'utf8');
export async function getAllRiddles(){
    const response = await fetch('http://localhost:2123/riddle/getAll')
    const riddles = await response.json()
    return riddles
}

export async function printAllRiddles(){
    const response = await getAllRiddles()
    console.log(response)
}


export async function addRiddle(){
    const allRiddles = await getAllRiddles()
    const newRiddle = riddleService.creatRiddleObj(allRiddles)
    await fetch('http://localhost:2123/riddle/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + token
        },
        body: JSON.stringify(newRiddle)
    })
}


export async function deleteRiddleById(){
    const id = riddleService.getIdFromeUser()
    await fetch('http://localhost:2123/riddle/delete', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization':'Bearer ' + token},
        body: JSON.stringify(id) 
})
}

export async function updeateRiddle(){
    const updeat = await riddleService.updeatRid()
    await fetch('http://localhost:2123/riddle/updeate', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + token},
        body: JSON.stringify(updeat)
})
}

