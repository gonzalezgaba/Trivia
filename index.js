function saveUser(){
  let user = document.getElementById("user").value;
  let userForm = document.getElementById("userForm");
  if(user!=""){
    localStorage.setItem("name", user);
    userForm.submit();
    /* Hacer .submit a la variable que contiene el formulario else {
      equivalente a hacer click en un boton type="submit"
    }*/
  }
}
function setName(){
  let greetings = document.getElementById("greetings"); /* la variable greetings está
  almacenando el h1 que tiene id="greetings"*/
  greetings.innerHTML = "Hola, "+localStorage.getItem("name");
  /* .innerHTML me permite escribir dentro de mi <h1 id="greetings"></h1> */
}
function trivia(){
  let actualQuestion = "q1"
  let question1 = document.getElementById("question1")
  let question2 = document.getElementById("question2")
  let question3 = document.getElementById("question3")
  let score = 0;
  let button = document.getElementById("nextQuestion")
  let finalScore = document.getElementById("score")
  question2.style.display="none"
  question3.style.display="none"
  finalScore.style.display="none"

  button.addEventListener("click", function() {
    if(actualQuestion == "q1"){
      if(document.getElementById("answerA1").checked || document.getElementById("answerA2").checked || document.getElementById("answerA3").checked){
        question1.style.display="none"
        question2.style.display="block"
        actualQuestion = "q2"
      }
    }
    else if(actualQuestion == "q2") {
      if(document.getElementById("answerA4").checked || document.getElementById("answerA5").checked || document.getElementById("answerA6").checked){
        question2.style.display="none"
        question3.style.display="block"
        button.textContent="Terminar"
        actualQuestion = "q3"
      }
    }
    else if(actualQuestion == "q3"){
      if(document.getElementById("answerA7").checked || document.getElementById("answerA8").checked || document.getElementById("answerA9").checked){
        question3.style.display="none"
        button.style.display="none"
        let showScore = document.getElementById("finalScore")
        let correctAnswers = document.getElementsByClassName("correct")
        for (let i = 0; i < correctAnswers.length; i++) {
          if(correctAnswers[i].checked){
            score++
          }
        }
        let categoryTittle = document.getElementById("categoryTittle")
        showScore.textContent="¡"+score+"/3!"
        finalScore.style.display="block"
        categoryTittle.style.display="none"

      }
    }
  })
}
function bye() {
  let bye = document.getElementById("bye");
  bye.innerHTML = "¡Muchas gracias por participar, "+localStorage.getItem("name")+"!";
}
