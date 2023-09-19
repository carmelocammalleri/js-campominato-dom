//Esercizio 1-----------------------------------------------
//1.
const containerGame = document.querySelector('.container');

const btnStart = document.getElementById('btn-start');

addBoxes();

//2.
function addBoxes (numBoxes){
  for(let i = 1; i <= numBoxes; i++){
    let box = document.createElement('div');
    box.setAttribute("id",i);
    box.classList.add(`square-${numBoxes}`);
    containerGame.append(box);

    //4.
    box.addEventListener('click', function() {

    //3.2 veriffica click cella con bomba 
      let isBomb = false;
      if (listBomb.includes(i)){
        isBomb = true;
      }

      if(isBomb){
        this.classList.toggle('bomb');

      }else {
      this.classList.toggle('clicked');
      }
  })
  }
}
 
//5.
let listBomb =[];

btnStart.addEventListener('click', function(){
  containerGame.classList.remove('hide')
  containerGame.innerHTML= ' ';
  // 2.2 generazione array con numeri randomici all'interno

  for(let i = 0 ; i < 16; i++){ 
    let tmp = Math.floor(Math.random() * 49) +1;   
    let nuovo = true;
  
    for(let j = 0; j < i; j++){
      if(listBomb[j]==tmp)nuovo=false;
    }
    if(nuovo){
      listBomb[i]=tmp;
    }else{
      i--;
    }
  lvl();
  console.log(listBomb)
}

  
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
//Esercizio 1------------------------------------------------



