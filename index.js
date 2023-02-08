const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("pw-shelf-one")
let passwordTwoEl = document.getElementById("pw-shelf-two")

let generateButton = document.getElementById("generateButton")
let passwordLength = 15

generateButton.addEventListener("click", generatePassword)

function generatePassword() {
    
    let passwordOne = ""
    let passwordTwo = ""
    
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    
    passwordOneEl.innerText = passwordOne
    passwordTwoEl.innerText = passwordTwo
}




    


    