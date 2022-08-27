//display
let computerChoice=document.getElementById("computer-choice")
let userChoice=document.getElementById("user-choice")
let result=document.getElementById("result")
//button
let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissors=document.getElementById("scissors")
//computer generate
const computerArray=["Rock","Paper","Scissors"]
//result
let resultDisplay


rock.addEventListener('click',function(){
    //user choice
    userChoice.textContent="Rock"
    //computer choice
    generateComputer()
    //result
    getResult()
})
paper.addEventListener('click',function(){
    //user choice
    userChoice.textContent="Paper"
    //computer choice
    generateComputer()
    //result
    getResult()

})
scissors.addEventListener('click',function(){
    //user choice
    userChoice.textContent="Scissors"
    //computer choice
    generateComputer()
    //result
    getResult()
})

function generateComputer(){
    randomGenerator=Math.floor(Math.random()*3)
    computerChoice.textContent=computerArray[randomGenerator]
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

    result.innerText=resultDisplay
}