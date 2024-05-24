let buttons = document.querySelectorAll('.sequence-button');
let output = document.querySelector('.container');
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        if (count % 2 === 1) {
            button.textContent = 'x';
        } else {
            button.textContent = 'o'; 
        }
        winner(); // Call winner function after each button click
    });
});

function winner() {
    let button1 = document.getElementById("button1").textContent;
    let button2 = document.getElementById("button2").textContent;
    let button3 = document.getElementById("button3").textContent;
    let button4 = document.getElementById("button4").textContent;
    let button5 = document.getElementById("button5").textContent;
    let button6 = document.getElementById("button6").textContent;
    let button7 = document.getElementById("button7").textContent;
    let button8 = document.getElementById("button8").textContent;
    let button9 = document.getElementById("button9").textContent;

    if (button1 === 'x' && button2 === 'x' && button3 === 'x') {
        output.textContent = "X is the winner";
    } else if (button1 === 'o' && button2 === 'o' && button3 === 'o') {
        output.textContent = "O is the winner";
    }
    if( button4 === 'x' && button5 ==='x' && button6 ==='x'){
        output.textContent="X is the winner";
    }else if ( button4 === 'o' && button5 === 'o' && button6 ==='o'){
        output.textContent="O is the winner";
    }
    if( button7 === 'x' && button8 === 'x' && button9 ==='x'){
        output.textContent="X is the winner";
    }else if( button7 === 'o' && button8 === 'o' && button9 === 'o'){
        output.textContent="O is the winner"
    }
    if( button1 === 'x' && button5 === 'x' && button9 === 'x'){
        output.textContent="X is the winner";
    }else if( button1 === 'o' && button5 === 'o' && button9 === 'o'){
        output.textContent="O is the winner";
    }
    if( button3 === 'x' && button5 === 'x' && button7 === 'x'){
        output.textContent="X is the winner";
    }else if( button3 === 'o' && button5 === 'o' && button7 === 'o'){
        output.textContent="O is the winner"
    }
    if( button1 === 'x' && button4 === 'x' && button7 === 'x'){
        output.textContent="X is the winner"
    }else if( button1 === 'o' && button4 === 'o' && button7 === 'o'){
        output.textContent="O is the winner";
    }
    if( button2 === 'x' && button5 === 'x' && button8 === 'x'){
        output.textContent="X is the winner";
    }else if( button2 === 'o' && button5 === 'o' && button8 === 'o'){
        output.textContent="O is the winner";
    }
    if( button3 === 'x' && button6 === 'x' && button9 === 'x'){
        output.textContent="X is the winner";
    }else if( button3 === 'o' && button6 === 'o' && button9 === 'o'){
        output.textContent="O is the winner";
    }
     
}
