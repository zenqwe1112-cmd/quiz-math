let questions = [

"1. sin 90° มีค่าเท่าไร ?",

"2. cos 0° มีค่าเท่าไร ?",

"3. tan 45° มีค่าเท่าไร ?",

"4. sin 30° มีค่าเท่าไร ?",

"5. cos 60° มีค่าเท่าไร ?",

"6. tan 0° มีค่าเท่าไร ?",

"7. sin 270° มีค่าเท่าไร ?",

"8. cos 180° มีค่าเท่าไร ?",

"9. tan 45° + cos 0° มีค่าเท่าไร ?",

"10. เป็นแฟนกันมั้ยคะบ"

];

let current = 0;

document.getElementById("question").innerText =
questions[current];

function next(){

current++;

if(current < questions.length){

document.getElementById("question").innerText =
questions[current];

document.getElementById("count").innerText =
(current+1)+"/"+questions.length;

}
else{

document.querySelector(".card").innerHTML =
"<h2>รักนะ ิิ</h2>";

}

}
