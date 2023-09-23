//Esercizio 1----------------------------------------------
//1.
const containerGame = document.querySelector('.container');
const btnStart = document.getElementById('btn-start');
let counterScore = 0;
addBoxes();

//2.
function addBoxes (numBoxes){
  for(let i = 1; i <= numBoxes; i++){
    let box = document.createElement('div');
    box.classList.add(`square-${numBoxes}`);
    containerGame.append(box);
    box.addEventListener('click', function(){

      let isBomb = false;
      if (listBomb.includes[i]){
        this.classList.toggle('bomb');
        endGame ()
        isBomb = true;
      } else {
        this.classList.toggle('clicked');
        counterScore ++;
      }
      console.log(counterScore);
    })
  }
}

//5.
let listBomb =[];

btnStart.addEventListener('click', function(){
  containerGame.classList.remove('hide');
  containerGame.innerHTML= ' ';

  // 3. creazione
  for(let i = 0 ; i < 16; i++){ 
    let tmp = Math.floor(Math.random() * 49 ) +1;
    
    let nuovo = true;
    for(let j = 0; j < i; j++){
      if(listBomb[j]==tmp)nuovo=false;
    }
    if(nuovo){
      listBomb[i]=tmp;
    }else{
      i--;
    }
  } 
  lvl();
  console.log(listBomb)
})

function lvl(){
  let select = document.getElementById ('selectId').value;
  console.log(select);
  
  if (select == 1){
    addBoxes(49);
  } else if (select == 2){
    addBoxes(64);
  } else if (select == 3) {
    addBoxes(100);
  }
}

function endGame (){
 containerGame.innerHTML +=`<h1>Hai perso!</h1>`;
}
//Esercizio 1---------------------------------------------