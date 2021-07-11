var elements = document.querySelectorAll('[type=radio]');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', (e) => {
        let pronounced = e.target.value;
        if (pronounced == "correct"){
            alert("acertou a pergunta");
        }else if(pronounced == "incorrect"){
            alert("errou a pergunta");
        }
    })
}