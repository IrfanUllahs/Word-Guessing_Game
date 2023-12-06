const randNum=parseInt(Math.random()*(100+1))
console.log(randNum);
let UserInput=document.getElementById("guessField")
let submit=document.getElementById("subt")
let count=document.querySelector(".count")
let resultParas=document.querySelector(".resultParas")
let prevGuess=document.querySelector('.guesses')

let lowORhigh=document.querySelector(".lowOrHi")
let GamePlay=true
let Gcount=10;
let GuessNum=0;
let newbutton=document.createElement('p')
let p=document.createElement("p");
newbutton.style.backgroundColor="red";
newbutton.style.borderRadius = "10px";
newbutton.style.textAlign="center"

if(GamePlay){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        GuessNum=parseInt(UserInput.value)
        // console.log( GuessNum);
        if (isNaN(GuessNum)) {
            alert('PLease enter a valid number');
          } else if (GuessNum < 1) {
            alert('PLease enter a number more than 1');
          } else if (GuessNum > 100) {
            alert('PLease enter a  number less than 100');
          } 
          else{
           if(GuessNum===randNum){
            endGame()
           }else if(Gcount==0){
            endGame()
           }
           else{
            displaymessage();
           }
          }
    })
}
function displaymessage(){
    if(GuessNum>randNum){
       lowORhigh.innerHTML="<h2>Number is Tooo High</h2>"
    }
    else if( GuessNum< randNum){
        lowORhigh.innerHTML="<h2>Number is T000 low </h2>"
    }
   
    prevGuess.textContent+=`${GuessNum}, `
    Gcount--;
    count.textContent=Gcount
   

}
function endGame(){
   
    newbutton.setAttribute("id","newGameb")
    if(GuessNum===randNum){

        p.innerHTML=`<h2> You won!  <h2>`
        newbutton.innerHTML= `<h2> <span id="newGameb" > New Game <h2>    </span>`
        resultParas.appendChild(p)
        resultParas.appendChild(newbutton)
        lowORhigh.innerHTML= "<h2></h2>"
        newGame()

    }
    else{
        lowORhigh.innerHTML= "<h2></h2>"
        p.innerHTML=`<h2>Game Over <h2>`
        newbutton.innerHTML= `<h2> <span id="newGameb" > New Game <h2>    </span>`
        resultParas.appendChild(p)
        resultParas.appendChild(newbutton)
        newGame()

    }
    
    GamePlay=false
    UserInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '')
    

}
function newGame(){
    const newGamebutton=document.querySelector("#newGameb")
    console.log(newGamebutton);
    newGamebutton.addEventListener('click',function(e){
        e.preventDefault();
        Gcount=10;
        GamePlay=true
        UserInput.removeAttribute('disabled');
        submit.removeAttribute('disabled')
        prevGuess.textContent =''
        count.textContent=Gcount
        resultParas.removeChild(p)
        resultParas.removeChild(newGamebutton)
        
    })


}