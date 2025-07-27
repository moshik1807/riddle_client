import promptSync from 'prompt-sync'
const input = promptSync();
import Player from './models/PlayerClass.js'

export function PlayerObj(){
    const name = input('enter your name: ')
    const password = input('enter password: ')
    return {name:name,password:password}
}

export async function login(user){
    await new Promise(resolve => setTimeout(resolve, 1000))
    try{
    const response = await fetch('http://localhost:2123/player/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        const data = await response.json()
        return data.token;
    }catch(err){
    }    
}


export async function signup(user){
    await new Promise(resolve => setTimeout(resolve, 1000))
    try{
    const response = await fetch('http://localhost:2123/player/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }catch(err){

    }
}
