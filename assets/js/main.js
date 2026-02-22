// =============================
// LOAD HEADER
// =============================
fetch("components/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;
initLanguageToggle();
setActiveMenu();
});

// =============================
// LOAD FOOTER
// =============================
fetch("components/footer.html")
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

// =============================
// GLOBAL LANGUAGE SYSTEM
// =============================

const t={
hi:{
brand:"भारत अभ्युदय संस्थान",
sub:"अभ्युदय से आत्मनिर्भर भारत तक"
},
en:{
brand:"Bharat Abhyudaya Sansthan",
sub:"Upliftment to Self-Reliant India"
}
};

function applyLanguage(){

const lang=localStorage.getItem("bas_lang")||"hi";
const d=t[lang];

const brand=document.getElementById("brandText");
const sub=document.getElementById("brandSub");

if(brand) brand.textContent=d.brand;
if(sub) sub.textContent=d.sub;

const btnHi=document.getElementById("btnHi");
const btnEn=document.getElementById("btnEn");

if(btnHi && btnEn){
btnHi.classList.toggle("active",lang==="hi");
btnEn.classList.toggle("active",lang==="en");

btnHi.onclick=()=>{
localStorage.setItem("bas_lang","hi");
location.reload();
};

btnEn.onclick=()=>{
localStorage.setItem("bas_lang","en");
location.reload();
};
}

}

// wait header load
setTimeout(applyLanguage,300);
