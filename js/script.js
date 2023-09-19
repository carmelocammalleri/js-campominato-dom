//Esercizio 1-----------------------------------------------
//1.
const containerGame = document.querySelector('.container');

const btnStart = document.getElementById('btn-start');

addBoxes();

//2.
function addBoxes (numBoxes){
  for(let i = 1; i <= numBoxes; i++){
    let box = document.createElement('div');
    box.classList.add(`square-${numBoxes}`);
    containerGame.append(box);

    //4.
    box.addEventListener('click', function() {
      let click = this.classList.toggle('clicked');

    //3.
    let max =`${numBoxes}`;
    const min = 1;
    lvl();
    
    if(click){
      box.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);  
    } else{
      box.innerHTML= ' ';
    }
  })
  }
}
 
//5.
btnStart.addEventListener('click', function(){
  containerGame.classList.remove('hide')
  containerGame.innerHTML= ' ';
  lvl();
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