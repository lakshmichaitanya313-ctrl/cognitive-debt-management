let day1Score = 0;

function scrollToSection(id){
document.getElementById(id).scrollIntoView();
}

function calculateDebt(){

let q1 = Number(document.getElementById("q1").value);
let q2 = Number(document.getElementById("q2").value);
let q3 = Number(document.getElementById("q3").value);
let q4 = Number(document.getElementById("q4").value);

let total = q1 + q2 + q3 + q4;
day1Score = total;

document.getElementById("scoreText").innerText =
"Cognitive Debt Score: " + total + " / 16";

let level = "";

if(total <= 6) level = "Low Cognitive Debt";
else if(total <= 11) level = "Medium Cognitive Debt";
else level = "High Cognitive Debt";

document.getElementById("levelText").innerText =
"Level: " + level;

document.getElementById("fatigueBar").style.width = q1*25 + "%";
document.getElementById("procBar").style.width = q2*25 + "%";
document.getElementById("overBar").style.width = q3*25 + "%";

scrollToSection("result");
localStorage.setItem("day1", total);
}

function startRecovery(){

day1Score = localStorage.getItem("day1");
let day7Score = Math.max(day1Score - 4,0);

document.getElementById("day1").innerText =
"Day 1 Score: " + day1Score;

document.getElementById("day7").innerText =
"Day 7 Score (Estimated): " + day7Score;

drawChart(day1Score,day7Score);
scrollToSection("progress");
}

function drawChart(d1,d7){
new Chart(document.getElementById("chart"),{
type:"bar",
data:{
labels:["Day 1","Day 7"],
datasets:[{
label:"Cognitive Debt",
data:[d1,d7],
backgroundColor:["#9f8cff","#6dd6b7"],
barthickness : 25
}]
}
});
}

function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user !== "" && pass !== ""){

localStorage.setItem("user",user);

document.getElementById("login").style.display = "none";
document.getElementById("mainSite").style.display = "block";

}
else{
document.getElementById("loginMsg").innerText="Please enter details";
}

}
let stressChart = null;

function analyzeMind(){

let text = document.getElementById("mindText").value.toLowerCase();

if(text.trim()==""){
alert("Please write something");
return;
}

let stress = 20;

// Keyword based stress detection
if(text.includes("tired")) stress += 15;
if(text.includes("stress")) stress += 20;
if(text.includes("anxious")) stress += 20;
if(text.includes("exam")) stress += 15;
if(text.includes("deadline")) stress += 15;
if(text.includes("overwhelmed")) stress += 20;
if(text.includes("sad")) stress += 15;

if(stress > 100) stress = 100;

document.getElementById("stressResult").innerText =
"Stress Level: " + stress + "%";

// Quotes
let quote = "";

if(stress < 40){
quote = "You are doing better than you think 🌱";
}
else if(stress < 70){
quote = "Slow progress is still progress 💙";
}
else{
quote = "Pause. Breathe. You matter. This will pass 🤍";
}

document.getElementById("quoteResult").innerText = quote;

drawStressChart(stress);

scrollToSection("mind");
}

function drawStressChart(value){

if(stressChart){
stressChart.destroy();
}

stressChart = new Chart(document.getElementById("stressChart"),{
type:"pie",
data:{
labels:["Stress","Remaining"],
datasets:[{
data:[value,100-value],
backgroundColor:["#ff7675","#dfe6e9"]
}]
},
options:{
plugins:{
legend:{
position:"bottom"
}
}
}
});
}