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

            alert("Correct ✔️")

        }else if(pronounced == "incorrect"){

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            alert("try again 🤦‍♂️");

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n=0; n < els.length; n++){
                els[n].disable = false;
            }

            let correct = parentNode.parentNode.querySelector('[valeu = correct]');
            correct.parentNode.style.backgroundColor = 'green';


        }
    })
}