let questions = [

{
question:"1. sin 90° มีค่าเท่าไร ?",
choices:["1","0"],
answer:"1"
},

{
question:"2. cos 0° มีค่าเท่าไร ?",
choices:["1","-1"],
answer:"1"
},

{
question:"3. tan 45° มีค่าเท่าไร ?",
choices:["1","2"],
answer:"1"
},

{
question:"4. sin 30° มีค่าเท่าไร ?",
choices:["1/2","1"],
answer:"1/2"
},

{
question:"5. cos 60° มีค่าเท่าไร ?",
choices:["1/2","0"],
answer:"1/2"
},

{
question:"6. tan 0° มีค่าเท่าไร ?",
choices:["0","1"],
answer:"0"
},

{
question:"7. sin 270° มีค่าเท่าไร ?",
choices:["-1","1"],
answer:"-1"
},

{
question:"8. cos 180° มีค่าเท่าไร ?",
choices:["-1","1"],
answer:"-1"
},

{
question:"9. tan45° + cos0° มีค่าเท่าไร ?",
choices:["2","1"],
answer:"2"
},

{
question:"10. เป็นแฟนกันมั้ยคะบ",
choices:["เป็น","เป็น"],
answer:"อะไรก็ได้"
}

];

let current = 0;
let score = 0;

showQuestion();

function showQuestion(){

document.getElementById("question").innerText =
questions[current].question;

document.getElementById("count").innerText =
(current+1)+"/"+questions.length;

let buttons =
document.querySelectorAll(".choice");

buttons[0].innerText =
questions[current].choices[0];

buttons[1].innerText =
questions[current].choices[1];

}

function next(choice){

// เช็คคะแนนแบบเนียนๆ
if(
choice === questions[current].answer
|| current === 9
){
score++;
}

current++;

if(current < questions.length){

showQuestion();

}else{

document.querySelector(".card").innerHTML=
"<h2>รักนะ ิิ</h2><p>คะแนนตรีโกณ: "+score+"/10</p>";

}

}
