const contactForm = document.getElementsByClassName('.form__contact')
let nom = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let formData = {
        name: nom.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/contact");
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            alert('L'/'email à été envoyé !');
            nom.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Malheuresement il y a eu une erreur')
        }
    }

xhr.send(JSON.stringify(formData));

});