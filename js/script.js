// const cycle = document.getElementById("magic8Ball");
// cycle.addEventListener("mouseover", cycleFunction);

// function cycleFunction(){
//     let i = 0;
    
//     while (i < 1000){
    
//         console.log(i);
//         i++;

//     }
// }

const click = document.getElementById("button");
click.addEventListener("click", randomFunction);

function randomFunction(){
   const newImg = Math.ceil(Math.random() * 20);
   let newSrc = `./media/magic8ball_${newImg}.png`
    document.getElementById("magic8Ball").src = newSrc;
    document.querySelector("input").style.display = "none";
    document.querySelector(".reset").style.display = "initial";
    document.querySelector(".button").style.display = "none";
}

const output = document.getElementById("ptag")

document.forms.contact.addEventListener('button', function(event){
    console.log("test");
    output.innerHTML = (`Name: ${event.target.Name.value} `);
    });