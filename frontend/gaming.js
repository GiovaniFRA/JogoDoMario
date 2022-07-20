
let mario = document.getElementById("mario");
let Mario = window.getComputedStyle(document.getElementById("mario"));
let obstaculo = window.getComputedStyle(document.getElementById("obstaculo"));
let fail;


    let TeclaPressionada = {
        32() {
            mario.id = "marioJump";
            setTimeout(resetid, 700);
        }
    };
    
    document.addEventListener("keydown", function tec() {
        let tec = event.keyCode;
        let move = TeclaPressionada[tec];
        if(move){move();}
    });
    
    setInterval(() => {
        let obstaculoP = obstaculo.right.replace("px", " ");
        let marioP = Mario.top.replace("px", " ");
        if (obstaculoP >= 1100 && marioP > 250 && obstaculoP < 1200){ alert("pedeu"); }
    }, 10)
    
    function resetid() {
        mario.id = "mario";
    }
    
    
    





