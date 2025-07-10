import promptSync from 'prompt-sync'
const prompt = promptSync()

export function getIdFromeUser(){
    const id = prompt("enter id riddle to you whant delete")
    return {id:id}
}



export function creatRiddleObj(x) {
    const newRiddle = {}
    newRiddle["id"] = x[x.length-1].id + 1
    newRiddle["level"] = prompt("enter level")
    newRiddle["name"] = prompt("enter name")
    newRiddle["taskDescription"] = prompt("enter taskDescription")
    newRiddle["correctAnswer"] = prompt("enter correctAnswer")
    newRiddle["timer"] = prompt("enter timer")
    newRiddle["hint"] = prompt("enter hint")
    return newRiddle
}


export async function updeatRid() {
    let riddleUpdeate = {}
    riddleUpdeate["id"] = prompt("enter id riddle you whant to change")
    riddleUpdeate["taskDescription"] = prompt("enter taskDescription updeat")
    riddleUpdeate["correctAnswer"] = prompt("enter correctAnswer updeat")
    riddleUpdeate["hint"] = prompt("enter hint updeat")
    return riddleUpdeate
}




