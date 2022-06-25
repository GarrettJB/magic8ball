// START BUTTON ACTIONS

const start = document.getElementById("start");
start.addEventListener("click", startFunction);

function startFunction(){
   
    document.querySelector("input").style.display = "initial";
    document.querySelector(".button").style.display = "initial";
    document.querySelector("p").style.display = "flex";
    document.querySelector(".start").style.display = "none";

}

// SUBMIT BUTTON ACTIONS

const click = document.getElementById("button");
click.addEventListener("click", randomFunction);

document.forms["contact"].addEventListener('submit', function(event){
    event.preventDefault();
})

function randomFunction(){
   

   
    const output = document.getElementById("ptag")
    let input = document.forms["contact"]["question"].value;

    if(input.length === 0){
        document.querySelector("p").innerHTML = "YOU NEED TO ASK A QUESTION!!!"
        document.querySelector(".black").style.opacity = "1";
        document.getElementById("input").placeholder = "Dont.......dont anger the orb...";
        document.getElementById("magic8BallStart").src = `./media/magic8ball_anger.png`;
        document.getElementById("magic8Ball").src = `./media/magic8ball_anger.png`;
    } else {

        const newImg = Math.ceil(Math.random() * 20);
        let newSrc = `./media/magic8ball_${newImg}.png`
        document.getElementById("magic8Ball").src = newSrc;
        document.querySelector("input").style.display = "none";
        document.querySelector(".reset").style.display = "initial";
        document.querySelector(".button").style.display = "none";
        document.querySelector("p").innerHTML = input;
        document.querySelector(".black").style.opacity = "0";
        document.getElementById("input").placeholder = "What is your question?";
        document.getElementById("magic8BallStart").src = `./media/magic8ball_start.png`;
    }

    
}

// RESET BUTTON ACTIONS

const onPress = document.getElementById("reset");
onPress.addEventListener("click", resetFunction);

function resetFunction(){
    document.querySelector("input").style.display = "initial";
    document.querySelector(".reset").style.display = "none";
    document.querySelector(".button").style.display = "initial";
    document.querySelector("p").innerHTML = "Ask your question and submit it to THE ORB.";
    document.getElementById("magic8Ball").src = `./media/magic8ball_start.png`;
}

