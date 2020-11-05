var botao = document.querySelector(".voltaraotopo");

botao.addEventListener("click", botaoApertado);

function botaoApertado(){
        document.documentElement.scrollTop = 0
        console.log("ola")
    };
    
