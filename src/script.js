const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = "0123456789";
const specialChar = "!@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + specialChar;

function createPassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    const text = passwordBox.value;
    navigator.clipboard.writeText(text).then(() => {
        const clipboard = document.getElementsByClassName('clipboard')[0];
        clipboard.classList.remove('hidden'); 
        
        clipboard.classList.add('animate');

        setTimeout(() => {
            clipboard.classList.add('hidden'); // Hide the message again
            clipboard.classList.remove('animate'); 
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
