const passwords = [...document.querySelectorAll('input[type="password"]')];
const buttonSubmit = document.querySelector('button[type="submit"]')
const spanMessage = document.querySelector('.message')

function checkValidPassword(passwords){
    return passwords.every((input)=>passwords[0]?.value === input.value)
}

buttonSubmit.addEventListener("click",(e)=>{
    const result  = checkValidPassword(passwords)
    if(!result){
        e.preventDefault()
        passwords.map((input)=>input.classList.add("erorInput"))
        const paragraph = document.createElement("p")
        paragraph.innerText = "*Passwords don't match"
        paragraph.classList.add("eror")
        spanMessage.appendChild(paragraph)
    }
})
