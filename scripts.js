const botao = document.getElementById("btn_welcome");

botao.addEventListener("click", clickedButton);

function clickedButton() {
    const paragrafo = document.querySelector(".welcome_msg");
    const welcomeSection = document.querySelector(".welcome");

    paragrafo.classList.toggle("hidden");

    if (paragrafo.classList.contains("hidden")) {
        botao.textContent = "Exibir Boas Vindas";
        botao.classList.add("btn-ativo");
        welcomeSection.classList.add("hidden_space");
    } else {
        botao.textContent = "Ocultar Boas Vindas";
        botao.classList.remove("btn-ativo");
        welcomeSection.classList.remove("hidden_space");
    }    
}