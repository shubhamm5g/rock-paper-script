//display
const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const result=document.getElementById("result")
//button
const possibleChoices=document.querySelectorAll('button')
const arr=["Rock","Paper","Scissors"]
//result
let resultDisplay
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputer()
    getResult()
}))

function generateComputer(){
    randomGenerator=Math.floor(Math.random()*3)
    computerChoice=arr[randomGenerator]
    computerChoiceDisplay.innerHTML=computerChoice
}
function getResult(){
    
    if(computerChoice===userChoice){
        resultDisplay="its a Draw!"
    }
    if(computerChoice==='Rock'&& userChoice==="Paper"){
    resultDisplay="You Win!"
    }
    if(computerChoice==='Rock' && userChoice==="Scissors"){
        resultDisplay="You Lost!"
    }
    if(computerChoice==='Paper' && userChoice==="Scissors"){
        resultDisplay="You Win!"
    }
    if(computerChoice==='Paper' && userChoice==="Rock"){
        resultDisplay="You Lost!"
    }
    if(computerChoice==='Scissors' && userChoice==="Rock"){
        resultDisplay="You Win!"
    }
    if(computerChoice==='Scissors' && userChoice==="Paper"){
        resultDisplay="You Lost!"
    }

    result.innerHTML=resultDisplay
}