
let headingEl = document.getElementById("heading");

let heading = 0;


function onDecrese(){
    heading -=1;
    headingEl.textContent=heading;

     if (heading > 0){
        headingEl.style.color ="green";
    }
    else if (heading < 0){
        headingEl.style.color ="red";
    }
    else {
        headingEl.style.color ="black";
    }
}
 

function onIncrease(){
    heading +=1;
    headingEl.textContent = heading;

    if (heading > 0){
        headingEl.style.color ="green";
    }
    else if (heading = 0){
        headingEl.style.color ="red";
    }
    else {
        headingEl.style.color ="black";
    }
}





