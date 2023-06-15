var questions = [
    {
        question: "Html stands for ?",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for ?",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for ?",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question: "RAM stands for ?",
        option: ["random access memoery", "hyper text markup language", "html", "html"],
        correctAns: "random access memoery"
    },
    {
        question: "ROM stands for ?",
        option: ["read only memory", "hyper text markup language", "html", "html"],
        correctAns: "read only memory"
    }
]

var currentNum = document.getElementById("currentNum")
var totalNum = document.getElementById("totalNum")
var Que = document.getElementById("Que")
var opt = document.getElementById("opt")
var indexVal = 0
var marks = 0
var showMark = "Your Marks is"

function render(){
    var obj = questions[indexVal]
    Que.innerHTML = obj.question
    currentNum.innerHTML = indexVal + 1
    totalNum.innerHTML = questions.length
    opt.innerHTML = ""
    for(var i = 0; i < obj.option.length; i++){
         opt.innerHTML += 
         `<button class="btn btn-outline-dark mt-3 fs-5 w-75" onclick = "correct('${obj.correctAns}','${obj.option[i]}')"> 
         ${obj.option[i]}</button>`
    }
}
render()
function next(){
    if (indexVal + 1 == questions.length) {
                alert(showMark + " " + marks)
                marks = 0
                indexVal = 0
                render()
           }
           else{
indexVal++
render()
}
}
function correct(a,b){
   if(a == b){
    marks = marks + 1
   } 
  next()
}