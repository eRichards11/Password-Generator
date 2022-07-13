const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];


let password1 = document.querySelector("#password-1")
let password2 = document.querySelector("#password-2")

function random() {
    return Math.floor(Math.random() * characters.length);
  }

document.querySelector("#password-btn").addEventListener("click", function () {
    password1.textContent = "";
    password2.textContent = "";    
    for (let i = 0; i < 15; i++) {
            password1.textContent += characters[random()];
            password2.textContent += characters[random()];
            }
        })

