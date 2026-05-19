let questions = [

{
question:"1. sin 90° มีค่าเท่าไร ?",
choices:["1","0"],
},

{
question:"2. cos 0° มีค่าเท่าไร ?",
choices:["1","-1"],
},

{
question:"3. tan 45° มีค่าเท่าไร ?",
choices:["1","2"],
},

{
question:"4. sin 30° มีค่าเท่าไร ?",
choices:["1/2","1"],
},

{
question:"5. cos 60° มีค่าเท่าไร ?",
choices:["1/2","0"],
},

{
question:"6. tan 0° มีค่าเท่าไร ?",
choices:["0","1"],
},

{
question:"7. sin 270° มีค่าเท่าไร ?",
choices:["-1","1"],
},

{
question:"8. cos 180° มีค่าเท่าไร ?",
choices:["-1","1"],
},

{
question:"9. tan45° + cos0° มีค่าเท่าไร ?",
choices:["2","1"],
},

{
question:"10. เป็นแฟนกันมั้ยคะบ",
choices:["เป็น","เป็น"],
}

];

let current = 0;

showQuestion();

function showQuestion(){

document.getElementById("question").innerText =
questions[current].question;

document.getElementById("count").innerText =
(current+1)+"/"+questions.length;

document.querySelectorAll(".choice")[0].innerText =
questions[current].choices[0];

document.querySelectorAll(".choice")[1].innerText =
questions[current].choices[1];

}

function next(){

current++;

if(current < questions.length){

showQuestion();

}
else{

document.querySelector(".card").innerHTML=
"<h2>รักนะ ิิ</h2>";

}

}
