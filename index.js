var quizdata = [

    {
        question : 'Which framework is related to JavaScript',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct: 'c'
    },
    {
        question : 'Which is not programming language',
        a:'.HTML',
        b:'java',
        c:'c++',
        d:'python',
        correct: 'a'
    },
    {
        question : 'Which is not a framework',
        a:'react',
        b:'JavaScript',
        c:'angular',
        d:'django',
        correct: 'b'
    },
    {
        question : 'CSS stands for',
        a:'cascading style sheet',
        b:'cascading style state',
        c:'cascading sheet fo style',
        d:'none',
        correct: 'a'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question= document.getElementById('question')
var option_a= document.getElementById('a_val')
var option_b= document.getElementById('b_val')
var option_c= document.getElementById('c_val')
var option_d= document.getElementById('d_val')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{
    deSelect()

    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d

}

function deSelect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{
    var selectedoption;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1

    }    
    currentQuestion=currentQuestion+1
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quiz').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`
    }else{
        loadQuiz()
    }
})