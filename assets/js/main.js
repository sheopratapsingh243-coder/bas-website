// =============================
// LOAD HEADER
// =============================
fetch("/components/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;
initLanguageToggle();
setActiveMenu();
});

// =============================
// LOAD FOOTER
// =============================
fetch("/components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});


// =============================
// LANGUAGE TOGGLE
// =============================
function initLanguageToggle(){

const btnHi=document.getElementById("btnHi");
const btnEn=document.getElementById("btnEn");

if(!btnHi || !btnEn) return;

btnHi.onclick=()=>{
localStorage.setItem("language","hi");
location.reload();
};

btnEn.onclick=()=>{
localStorage.setItem("language","en");
location.reload();
};

}


// =============================
// ACTIVE MENU
// =============================
function setActiveMenu(){

const links=document.querySelectorAll(".menu a");
const current=window.location.pathname;

links.forEach(link=>{
if(link.getAttribute("href")===current){
link.style.color="#0b5aa6";
}
});

}
