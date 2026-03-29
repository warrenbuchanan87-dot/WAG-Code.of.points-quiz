let fullData = [
  {
    img: "images/vault/Vault1.00.png",
    correct: "Yurchenko Tuck",
    options: ["Tsukahara Pike", "Handspring", "Yurchenko Tuck", "Front Layout"]
  },
  {
    img: "images/vault/Vault1.01.png",
    correct: "Tsukahara Pike",
    options: ["Yurchenko Pike", "Tsukahara Pike", "Front Tuck", "Handspring"]
  },
  {
    img: "images/vault/Vault2.11.1.png",
    correct: "Front Layout",
    options: ["Front Layout", "Yurchenko", "Tsukahara", "Handspring"]
  }
];

let data = fullData.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

function start(){
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion(){

  if(current >= data.length){
    endQuiz();
    return;
  }

  let q = data[current];

  document.getElementById("question").innerText =
    "Question " + (current+1);

  document.getElementById("image").src = q.img;

  let buttons = document.querySelectorAll("#quiz button");

  q.options.sort(()=>Math.random()-0.5);

  buttons.forEach((btn, i)=>{
    btn.innerText = q.options[i];
  });
}

function answer(btn){

  if(btn.innerText === data[current].correct){
    score++;
  }

  current++;
  loadQuestion();
}

function endQuiz(){
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").innerText =
    "Score: " + score + "/" + data.length;
}
