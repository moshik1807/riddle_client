import promptSync from 'prompt-sync';
const input = promptSync();
import game from "./game.js";
import * as menegerRiddles from './menegerRiddles.js'


async function Menu(){
    let exit = false
    while(!exit){
        console.log('for start game press 1')
        console.log('for meneger riddles press 2')
        console.log('to exit press 3')
        let choice = input()
        switch (choice){
            case "1":
                await game()
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

async function menuRiddle(){
    console.log('for read all riddles press 1')
    console.log('for create new riddle press 2')
    console.log('to updeat riddle press 3')
    console.log('for delete riddle press 4')
    let choice = input()
    switch (choice){
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
    }
}


Menu()

// game()
// game()
