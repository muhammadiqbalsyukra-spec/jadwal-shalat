function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("id-ID");

document.getElementById("date").innerHTML =
now.toLocaleDateString("id-ID",{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
});

}

setInterval(updateClock,1000);
updateClock();

const panel =
document.getElementById("settingPanel");

function saveSettings(){

localStorage.setItem(
"namaMasjid",
document.getElementById("inputNamaMasjid").value
);
localStorage.setItem(
"lokasi",
document.getElementById("inputLokasi").value
);
localStorage.setItem(
"text",
document.getElementById("inputText").value
);
loadSettings();
  localStorage.setItem(
"subuh",
document.getElementById("subuhInput").value
);
localStorage.setItem(
"dzuhur",
document.getElementById("dzuhurInput").value
);
localStorage.setItem(
"ashar",
document.getElementById("asharInput").value
);
localStorage.setItem(
"maghrib",
document.getElementById("maghribInput").value
);
localStorage.setItem(
"isya",
document.getElementById("isyaInput").value
);
}

function loadSettings(){

document.getElementById("namaMasjid")
.innerHTML =
localStorage.getItem("namaMasjid")
|| "MASJID CONTOH";

document.getElementById("lokasi")
.innerHTML =
localStorage.getItem("lokasi")
|| "Kota / Kabupaten";

document.getElementById("runningText")
.innerHTML =
localStorage.getItem("text")
|| "Selamat datang di Masjid";
  const logo =
localStorage.getItem("logoMasjid");

if(logo){
document.getElementById("logo").src =
logo;
}
  document.getElementById("subuh").innerHTML =
localStorage.getItem("subuh") || "04:30";
document.getElementById("dzuhur").innerHTML =
localStorage.getItem("dzuhur") || "12:00";
document.getElementById("ashar").innerHTML =
localStorage.getItem("ashar") || "15:30";
document.getElementById("maghrib").innerHTML =
localStorage.getItem("maghrib") || "18:00";
document.getElementById("isya").innerHTML =
localStorage.getItem("isya") || "19:15";
}
loadSettings();

document
.getElementById("fullscreenBtn")
.addEventListener("click",()=>{
if(!document.fullscreenElement){
document.documentElement.requestFullscreen();
}else{
document.exitFullscreen();
}
});

function updateHijri(){
const hijri =
new Intl.DateTimeFormat(
'id-TN-u-ca-islamic',
{
day:'numeric',
month:'long',
year:'numeric'
}
).format(new Date());
document.getElementById("hijriDate")
.innerHTML = hijri;
}
updateHijri();

document
.getElementById("logoUpload")
.addEventListener("change",function(e){
const file = e.target.files[0];
const reader = new FileReader();
reader.onload = function(){
localStorage.setItem(
"logoMasjid",
reader.result
);
document.getElementById("logo").src =
reader.result;
}
reader.readAsDataURL(file);
});

function updateNextPrayer(){

const prayers = [
["Subuh",document.getElementById("subuh").innerHTML],
["Dzuhur",document.getElementById("dzuhur").innerHTML],
["Ashar",document.getElementById("ashar").innerHTML],
["Maghrib",document.getElementById("maghrib").innerHTML],
["Isya",document.getElementById("isya").innerHTML]
];

const now = new Date();
for(let p of prayers){
let target = new Date();
const parts = p[1].split(":");
target.setHours(parts[0]);
target.setMinutes(parts[1]);
target.setSeconds(0);
if(target > now){
let diff =
Math.floor((target-now)/1000);
let h =
String(Math.floor(diff/3600))
.padStart(2,"0");
let m =
String(Math.floor((diff%3600)/60))
.padStart(2,"0");
let s =
String(diff%60)
.padStart(2,"0");
document.getElementById("nextPrayer")
.innerHTML = p[0];
document.getElementById("countdown")
.innerHTML =
`${h}:${m}:${s}`;
break;
}
}
}
setInterval(updateNextPrayer,1000);
setInterval(()=>{
if(!navigator.onLine){
location.reload();
}
},60000);

const panel =
document.getElementById("settingPanel");
const PASSWORD = "123456";
document.getElementById("settingBtn")
.addEventListener("click",()=>{
const pass =
prompt("Masukkan Password");
if(pass === PASSWORD){
panel.style.display =
panel.style.display === "block"
? "none"
: "block";
}else{
alert("Password salah");
}
});

let indexPengumuman = 0;
function rotatePengumuman(){
const data =
(localStorage.getItem("pengumuman")
||"Selamat Datang")
.split("|");
document
.getElementById("runningText")
.innerHTML =
data[indexPengumuman];
indexPengumuman++;
if(indexPengumuman>=data.length){
indexPengumuman=0;
}
}
setInterval(
rotatePengumuman,
10000
);
window.onload=()=>{
if(localStorage.getItem("autoFullscreen")=="yes"){
document.documentElement
.requestFullscreen();
}
};

localStorage.setItem(
"theme",
document.getElementById("themeColor").value
);

document.documentElement
.style.setProperty(
"--theme",
localStorage.getItem("theme")
||"#00ff88"
);
