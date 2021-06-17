const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#sendit');
const warningDiv = document.querySelector("#warning");
const formSubscribe = document.querySelector("#subscribe");
const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

formSubscribe.addEventListener('submit', (event) => {
    event.preventDefault();
});

submitButton.addEventListener('click', () => {

    console.log(emailInput.value);

    if (!emailInput.value.match(regEmail)) {
        warningDiv.textContent = "Please, provide a valid email";

    } else {
        warningDiv.textContent = "";
        emailInput.value = '';
    }

});