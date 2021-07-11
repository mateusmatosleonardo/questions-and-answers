var elements = document.querySelectorAll('[type=radio]');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', (e) => {
        let pronounced = e.target.value;
        if (pronounced == "correct"){
            
            let el = e.target.previousElementSibling.style.backgroundColor = "green";

        }else if(pronounced == "incorrect"){
            let el = e.target.previousElementSibling.style.backgroundColor = "red";
        }
    })
}