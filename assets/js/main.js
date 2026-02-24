document.addEventListener("DOMContentLoaded", function () {

// ================= HEADER LOAD =================
fetch("components/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

setTimeout(()=>{

applyLanguage();
setActiveMenu();

// ===== INSTANT LANGUAGE TOGGLE =====
const toggle=document.getElementById("langToggle");

if(toggle){

toggle.addEventListener("click",()=>{

let lang=localStorage.getItem("bas_lang") || "hi";
lang=lang==="hi"?"en":"hi";

localStorage.setItem("bas_lang",lang);

// ✅ NO RELOAD
applyLanguage();

});

}

},100);
  
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

const lang = localStorage.getItem("bas_lang") || "hi";
const d = t[lang];

const setText = (id, value) => {
const el = document.getElementById(id);
if(el) el.textContent = value;
};

// ----- Header Text -----
setText("brandText", d.brand);
setText("brandSub", d.sub);

// ----- Menu -----
setText("mHome", d.home);
setText("mAbout", d.about);
setText("mWork", d.work);
setText("mDocs", d.docs);
setText("mDonate", d.donate);
setText("mGallery", d.gallery);
setText("mContact", d.contact);

// ----- Single Toggle Label -----
const label = document.getElementById("langLabel");
if(label){
label.textContent = lang === "hi" ? "हिन्दी" : "English";
}

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
