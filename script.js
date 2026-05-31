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

document.getElementById("settingBtn")
.onclick = () => {

panel.style.display =
panel.style.display === "block"
? "none"
: "block";

};

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
