function computerPlay() {
    let rock = "Rock"
    let paper = "Paper"
    let scissors = "Scissors"
    let gamePlay = [rock, paper, scissors]
    let final = gamePlay[Math.floor(Math.random() * gamePlay.length)]

    return final
}

console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())