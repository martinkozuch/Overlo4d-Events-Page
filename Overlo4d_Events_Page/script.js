let myArray = []
let myForm = document.querySelector(".from_form")
myForm.addEventListener("submit", function(event){

    event.preventDefault()

    myArray.push(event.target.elements.email.value)
    myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem("user_emails", myArrayToLS)

   event.target.elements.value = ""

})







