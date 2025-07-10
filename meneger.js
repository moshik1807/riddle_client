
async function getAllRiddles(){
    const response = await fetch('http://localhost:2123/riddle/getAll')
    const riddles = await response.json()
    console.log(riddles)
}
getAllRiddles()