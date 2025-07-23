import promptSync from 'prompt-sync';
const input = promptSync();
import {game,addPlayerToDB} from "./game.js";
import {PlayerObj} from './permissions.js'
import * as menegerRiddles from './menegerRiddles.js'
let token


async function start(){
    while(true){
    console.log('To signup, press 1.')
    console.log('To login, press 2.')
    console.log('To enter as a guest, press 3.')
    let choice = input()
    switch(choice){
        case "1":
            const Player = PlayerObj()
            await signup(Player)
            break
        case "2":
            const player = PlayerObj()
            token = await login(player)
            if(token){
                await Menu()
            }
            break
        case "3":
            await game()
            break
        default:
            break
        }
    }
}


async function Menu() {
    let exit = false;
    let choice;
    while (!exit) {
        console.log('for start game press 1')
        console.log('for meneger riddles press 2')
        console.log('to exit press 3')
        choice = input()
        switch (choice) {
            case "1":
                const player = await game()
                await addPlayerToDB(player)
                break
            case "2":
                await menuRiddle()
                break
            case "3":
                exit = true
                break
            default:
                break
        }
    }

}


async function menuRiddle() {
    console.log('for read all riddles press 1')
    console.log('for create new riddle press 2')
    console.log('to updeat riddle press 3')
    console.log('for delete riddle press 4')
    console.log('to exit press 5')
    let choice = input()
    switch (choice) {
        case "1":
            await menegerRiddles.printAllRiddles()
            break
        case "2":
            await menegerRiddles.addRiddle()
            break
        case "3":
            await menegerRiddles.updeateRiddle()
            break
        case "4":
            await menegerRiddles.deleteRiddleById()
            break
        case "5":
            console.log("goodbye!")
            return
    }
}


start()