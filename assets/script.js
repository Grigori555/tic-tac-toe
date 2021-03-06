const cross = document.getElementById("small_cross");
const round = document.getElementById("small_round");
const str = document.querySelectorAll(".str");
const scoreZero =document.getElementById("count0");
const scoreX =document.getElementById("countX");
const alonePlayer =document.getElementById("1player");
const two2Players =document.getElementById("2players");


// статусы и состояния
const empty = "empty";
const full = "full";
const hide = "hide";
const checked = "checked";
const disabled = "disabled";






// reset
const button = new Object({
    name:"reset",
    source:document.querySelector(".reset_game"),
  
})

Object.prototype.removeDisable = function(){
    this.removeAttribute("disabled")
    
}
Object.prototype.addDisable = function(){
    this.setAttribute("disabled","disabled");
}


Object.prototype.resetGame = function(element){
    element.classList.add("hide");
}




HTMLDivElement.prototype.classToggle = function(num1,num2){
    this.children[num1].classList.remove("hide")
    this.children[num2].classList.add("hide");
}


Object.prototype.dataFull= function(color ="blue"){
    this.dataset.container = "full";
    this.style.background =color;
}

HTMLDivElement.prototype.dataFullGo = function(childNum = 0){
   
    this.children[childNum].classList.remove("hide"); // 0
    this.dataFull("yellow")
}



Array.prototype.doZero = function (){
    for(let i =0; i<=this.length-1;i++){
        this[i] = 0
    }
    
}




const player = Object.create(button);
player.name = "player";

function toggleBoolean(){
    this.player1 = "Grigory";
  this.player2 =  "Dmitri";
}

const team = {
    player1: "Grigory",
    player2: "Dmitri",
    logInfo:function(){
        console.log(`Name of player1 ${this.player1}`)
        console.log(`Name of player2 ${this.player2}`)
    }
       
    }


    const team2 = {
        player1: "Aleksei",
        player2: "Andrew"
    }



team.logInfo.bind(team2)();




    
    







//изменение атрибута инпутов радио
round.addEventListener("click",()=>{
   if((round.hasAttribute("checked")===false) && cross.hasAttribute("checked")){
    round.setAttribute("checked","checked");
    cross.removeAttribute("checked");
   }
})


cross.addEventListener("click",()=>{
    if((cross.hasAttribute("checked")===false) && round.hasAttribute("checked")){
        cross.setAttribute("checked","checked");
        round.removeAttribute("checked");
    }
 })

// Score - счетчик ходов

const countResultX = new Array([
    0,0,0,0,0,0,0,0,0
])

const countResult0 = new Array([
    0,0,0,0,0,0,0,0,0
])




// Составление кейсов для определения побед

 let case1,case2,case3,case4,case5,case6,case7,case8;
        


// вывод  фигур

// Запуск игры 2 игрока








const fieldGame = new Object({})

let keys = ["a","b","c","d","e","f","g","h","i"]

for(let i =0; i<=keys.length-1;i++){
    let key = keys[i];
    let value =str[i]
    fieldGame[key] = value;
}








  // разрабатываем первый случайный ход  c помощью рекурсии

  // https://learn.javascript.ru/try-catch  перечитай
  

  // Переключатели
  let flag1;
  let flag2;


  






alonePlayer.onclick =()=>{
   
    flag1 = true;
    flag2 = false;
    two2Players.addDisable(); 
    

    str.forEach((element,index)=>{
        element.addEventListener("click",()=>{

           
           

        if(flag1){
            if(round.hasAttribute("checked") && 
            element.children[1].classList.contains("hide")&& 
            element.children[0].classList.contains("hide")){
                
             
                // round.removeAttribute("checked")
                // cross.setAttribute("checked","checked")
                element.classToggle(1,0); 
                element.dataFull();
               randoomRobot(element,0);
               getWin(element,index);
            
                // element.children[1].classList.remove("hide"); //1
                //  element.children[0].classList.add("hide");
                
                }
                if(cross.hasAttribute("checked") && 
                element.children[0].classList.contains("hide") &&
                 element.children[1].classList.contains("hide")
                ){
                    // cross.removeAttribute("checked")
                    // round.setAttribute("checked","checked")
                    element.classToggle(0,1); 
                    element.dataFull();
                   randoomRobot(element,1);
                  
                   getWin(element,index);
               
                    // element.children[0].classList.remove("hide"); // 0
                    //  element.children[1].classList.add("hide");
                    }   

        
                }     
             })
    })

}
  

// Разработка робота для одного игрока


// запуск побед робота






// метода проверки
let check =str[0].dataset.container ==="empty"||
      str[1].dataset.container ==="empty"||
      str[2].dataset.container ==="empty"||
      str[3].dataset.container ==="empty"||
      str[4].dataset.container ==="empty"||
      str[5].dataset.container ==="empty"||
      str[6].dataset.container ==="empty"||
      str[7].dataset.container ==="empty"||
      str[8].dataset.container ==="empty";

      

 
  function randoomRobot( index,childNum) {

    // случайное число
   
    function getRandomFloat(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

     
      let ranNum = getRandomFloat(0, 8);
     
     element2 = str[ranNum];

  try{
           
    if(element2.dataset.container === "empty"){
       
        element2.dataFullGo(childNum);
        element2.dataset.container = "full";
      str.forEach((element,index)=>{
        getWin(element,index);
       
      })
     
    
    } else if(str[0].dataset.container ==="empty"||
    str[1].dataset.container ==="empty"||
    str[2].dataset.container ==="empty"||
    str[3].dataset.container ==="empty"||
    str[4].dataset.container ==="empty"||
    str[5].dataset.container ==="empty"||
    str[6].dataset.container ==="empty"||
    str[7].dataset.container ==="empty"||
    str[8].dataset.container ==="empty" &&  (scoreZero.innerHTML ===0 && scoreX === 0)){
        randoomRobot(index,childNum)
    
  } 
 } catch(error){
      // переполнен стек вызовов
      
      console.log("поля заполнены, игра окончена", error);
    
  }  

  
    
}



  

    
// функция 2 игроков

two2Players.onclick =()=>{
    flag1 = false;
    flag2 = true;
    twoPlayers();
    alonePlayer.addDisable(); 
    
    
} 
        
        
function twoPlayers(){
    

    
        str.forEach((element,index)=>{
            
            element.addEventListener("click",()=>{

                
            if(flag2){ 
                
                if(cross.hasAttribute("checked") && 
                element.children[0].classList.contains("hide") &&
                element.children[1].classList.contains("hide")
                ){
                    cross.removeAttribute("checked")
                    round.setAttribute("checked","checked")
                    element.classToggle(0,1);
                    element.dataFull("yellow") // смотри прототипирование
                    // element.children[0].classList.remove("hide"); // 0
                    //  element.children[1].classList.add("hide");
                    }
                if(round.hasAttribute("checked") && 
                element.children[1].classList.contains("hide")&& 
                element.children[0].classList.contains("hide")){
                    
                    round.removeAttribute("checked")
                    cross.setAttribute("checked","checked")
                    element.classToggle(1,0);
                    element.dataFull("grey")  // смотри прототипирование
                    // element.children[1].classList.remove("hide"); //1
                    //  element.children[0].classList.add("hide");
                    
                    }    
            
        // Запуск побед и иных системных сообщений
        getWin(element,index);
        
            }
        
        })
            
        })
    
}


 
// Победы и системные сообщния

function getWin(element,index){

    // Сценарии  -  использовать только с ForEach
    
      // Запись ходов
    if((element.children[0].classList.contains("hide")===false)
    && element.children[1].classList.contains("hide")){

    
countResultX[index]=1;  // запись ходов X

    } else if ((element.children[1].classList.contains("hide")===false)
    && element.children[0].classList.contains("hide")){
countResult0[index]=1;  // запись ходов 0

    }
   // Случаи для X
      // горизонт
caseX1 = countResultX[0]+countResultX[1]+ countResultX[2];
caseX2 =countResultX[3]+countResultX[4]+ countResultX[5];
caseX3 =countResultX[6]+countResultX[7]+ countResultX[8];
// вертикаль
caseX4 =countResultX[0]+countResultX[3]+ countResultX[6];
caseX5 =countResultX[1]+countResultX[4]+ countResultX[7];
caseX6 =countResultX[2]+countResultX[5]+ countResultX[8];
// диагонали
caseX7 =countResultX[0]+countResultX[4]+ countResultX[8];
caseX8 =countResultX[2]+countResultX[4]+ countResultX[6];

// Случаи для 0
  // горизонт
  case01 = countResult0[0]+countResult0[1]+ countResult0[2];
  case02 =countResult0[3]+countResult0[4]+ countResult0[5];
  case03 =countResult0[6]+countResult0[7]+ countResult0[8];
  // вертикаль
   case04 =countResult0[0]+countResult0[3]+ countResult0[6];
   case05 =countResult0[1]+countResult0[4]+ countResult0[7];
   case06 =countResult0[2]+countResult0[5]+ countResult0[8];
  // диагонали
   case07 =countResult0[0]+countResult0[4]+ countResult0[8];
  case08 =countResult0[2]+countResult0[4]+ countResult0[6];






messageWin(caseX1,case01);
messageWin(caseX2,case02);
messageWin(caseX3,case03);
messageWin(caseX4,case04);
messageWin(caseX5,case05);
messageWin(caseX6,case06);
messageWin(caseX7,case07);
messageWin(caseX8,case08);

// Информация для модального окна
function messageWin(num1,num2){
    
    
    for(let x of countResultX){
        if(x === NaN){
            console.log(x);
        }
    }
    
    for(let y of countResult0){
        if(y === NaN){
            console.log(y);
        }
    }

         if(num1===3){
             alert("Победа крестиков");
             console.log(` до:  число  X: ${num1}, число  0: ${num2}`)
             num1 = 0;
             num2 = 0;
             resetRound();
            countResult0.doZero();
            countResultX.doZero();
             scoreX.textContent++;
             element.dataset.container ="empty";
             console.log(` после: число  X: ${num1}, число 0: ${num2}`)
         } else if (num2===3){
            alert("Победа ноликов");
            console.log(` до:  число  X: ${num1}, число  0: ${num2}`)
            num1 = 0;
             num2 = 0;
         
            countResult0.doZero();
            countResultX.doZero();
            resetRound();
            
            scoreZero.textContent++;
            element.dataset.container ="empty";
            console.log(` после: число  X: ${num1}, число 0: ${num2}`)
         } 
          if(
            num1===NaN  && num2===NaN && str[0].dataset.container ==="full" && 
            str[1].dataset.container ==="full" && 
            str[2].dataset.container ==="full" && 
            str[3].dataset.container ==="full" && 
            str[4].dataset.container ==="full" && 
            str[5].dataset.container ==="full" && 
            str[6].dataset.container ==="full" && 
            str[7].dataset.container ==="full" && 
            str[8].dataset.container ==="full") {
                console.log(` до:  число  X: ${num1}, число  0: ${num2}`)
            num1 = 0;
            num2 = 0;
            alert("Ничья");
            element.dataset.container ="empty";
            countResult0.doZero();
            countResultX.doZero();
            resetRound();
             console.log(` после: число  X: ${num1}, число 0: ${num2}`)


         }
         
     }
}






//  сброс игры
button.source.onclick = ()=>{
    resetAll();
    alonePlayer.removeDisable();
    two2Players.removeDisable()
}



    function resetAll(){ 
        resetRound();
        scoreZero.textContent=0;
        scoreX.textContent=0;
        countResult0.doZero();
        countResultX.doZero();
        flag1 = false;
        flag2 = false;
}



function resetRound(){
    str.forEach((element,index)=>{
        button.resetGame(element.children[0]);
        button.resetGame(element.children[1]);
        element.style.background = "white";
        element.dataset.container ="empty";
    })
}





