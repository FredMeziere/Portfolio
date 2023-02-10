const contactForm = document.getElementById('form__contact')
let nom = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
        name: nom.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.text())
      .then(data => {
        if (data === 'success') {
          alert("email send");
          nom.value = "";
          email.value = "";
          subject.value = "";
          message.value = "";
        } else {
          alert("Something went wrong");
        }
      });

});