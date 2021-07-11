var elements = document.querySelectorAll('[type=radio]');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', (e) => {
        let pronounced = e.target.value;
        if (pronounced == "correct"){
            
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n=0; n < els.length; n++){
                els[n].disable = true;
            }

        }else if(pronounced == "incorrect"){

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n=0; n < els.length; n++){
                els[n].disable = true;
            }

            let correct = parentNode.parentNode.querySelector('[valeu = correct]');
            correct.parentNode.style.backgroundColor = 'green';

        }
    })
}