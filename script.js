let questions = [
"ชอบดู YouTube แบบไหน?",
"ชอบสีอะไร?",
"ชอบเที่ยวไหม?"
];

let current = 0;

function next(answer){
current++;

if(current < questions.length){
document.getElementById("question").innerText = questions[current];
document.getElementById("count").innerText =
(current+1)+"/"+questions.length;
}
else{
document.querySelector(".card").innerHTML =
"<h2>คุณเป็นสายชิล 😆</h2>";
}
}
