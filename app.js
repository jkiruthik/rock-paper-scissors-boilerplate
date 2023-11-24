var score1=document.getElementById("score1")
var score2=document.getElementById("score2")
var result = document.getElementById("result")
var buttons=document.getElementById("button")
var temp=document.getElementById("temp")
var compHand=document.getElementById("compHand")
var playerIndex=0
var randIndex=0
var player=0
var computer=0
var playerHand=document.getElementById("PlayerHand")
hands=["./assets/rock-hand.png","./assets/paper-hand.png","./assets/scissors-hand.png"]

function randomGenerator(){

    randIndex=Math.floor(Math.random()*3)
    return randIndex
}

function adder(index){
    playerIndex=index
    playerHand.removeAttribute("src")
    playerHand.setAttribute("src",`${hands[index]}`)
    compHand.removeAttribute("src")
    compHand.setAttribute("src",`${hands[randomGenerator()]}`)
    finder()
    changer()
    

}
function finder(){
    let flag
    flag=playerIndex-randIndex
    if (flag==1){
        player+=1
    }else if(flag==-1){
        computer+=1
    }else if(flag==-2){
        player+=1
    }else if(flag==2){
        computer+=1
    }
    score1.textContent=player
    score2.textContent=computer

    
}
function changer(){
    if (computer==5 || player==5){
        temp.style.visibility="visible"
        buttons.style.visibility="hidden"
        if(computer>player){
            result.textContent="computer Wins"
        }else{
            result.textContent="Players Wins"
        }
    }
    
    
}