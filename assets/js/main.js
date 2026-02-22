document.addEventListener("DOMContentLoaded", function () {

// ================= HEADER LOAD =================
fetch("components/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

setTimeout(()=>{
initLanguageToggle();
applyLanguage();
setActiveMenu();
},100);

});

// ================= FOOTER LOAD =================
fetch("components/footer.html")
.then(res => res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});


// ================= LANGUAGE DATA =================
const t={
hi:{
brand:"भारत अभ्युदय संस्थान",
sub:"अभ्युदय से आत्मनिर्भर भारत तक",
home:"मुख्य पृष्ठ",
about:"परिचय",
work:"हमारे प्रयास",
docs:"दस्तावेज़",
donate:"दान करें",
gallery:"गैलरी",
contact:"संपर्क"
},
en:{
brand:"Bharat Abhyudaya Sansthan",
sub:"Upliftment to Self-Reliant India",
home:"Home",
about:"About",
work:"Initiatives",
docs:"Documents",
donate:"Donate",
gallery:"Gallery",
contact:"Contact"
}
};


// ================= APPLY LANGUAGE =================
function applyLanguage(){

const lang=localStorage.getItem("bas_lang") || "hi";
const d=t[lang];

document.getElementById("brandText").textContent=d.brand;
document.getElementById("brandSub").textContent=d.sub;

document.getElementById("mHome").textContent=d.home;
document.getElementById("mAbout").textContent=d.about;
document.getElementById("mWork").textContent=d.work;
document.getElementById("mDocs").textContent=d.docs;
document.getElementById("mDonate").textContent=d.donate;
document.getElementById("mGallery").textContent=d.gallery;
document.getElementById("mContact").textContent=d.contact;

document.getElementById("btnHi")
.classList.toggle("active",lang==="hi");

document.getElementById("btnEn")
.classList.toggle("active",lang==="en");

}


// ================= TOGGLE =================
function initLanguageToggle(){

document.getElementById("btnHi").onclick=()=>{
localStorage.setItem("bas_lang","hi");
applyLanguage();
};

document.getElementById("btnEn").onclick=()=>{
localStorage.setItem("bas_lang","en");
applyLanguage();
};

}


// ================= ACTIVE MENU =================
function setActiveMenu(){

const current=location.pathname.split("/").pop();

document.querySelectorAll(".menu a")
.forEach(link=>{
if(link.getAttribute("href").includes(current)){
link.style.color="#0b5aa6";
}
});

}

});
