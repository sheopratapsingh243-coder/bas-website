document.addEventListener("DOMContentLoaded", function () {

/* ================= HEADER LOAD ================= */

fetch("components/header.html")
.then(res => res.text())
.then(data => {

const header = document.getElementById("header");
if(header) header.innerHTML = data;

initAfterHeader();

});

/* ================= FOOTER LOAD ================= */

fetch("components/footer.html")
.then(res => res.text())
.then(data=>{
const footer=document.getElementById("footer");
if(footer) footer.innerHTML=data;
});


/* ================= INIT AFTER HEADER ================= */

function initAfterHeader(){

applyLanguage();
setActiveMenu();

/* toggle */
const toggle=document.getElementById("langToggle");

if(toggle){
toggle.addEventListener("click",()=>{

let lang=localStorage.getItem("bas_lang") || "hi";
lang = lang==="hi" ? "en" : "hi";

localStorage.setItem("bas_lang",lang);

applyLanguage();

});
}

}


/* ================= LANGUAGE DATA ================= */

const t = window.translationData || {

hi:{
brand:"भारत अभ्युदय संस्थान",
sub:"अभ्युदय से आत्मनिर्भर भारत तक",

home:"मुख्य पृष्ठ",
about:"परिचय",
work:"हमारे प्रयास",
docs:"दस्तावेज़",
donate:"दान करें",
gallery:"गैलरी",
contact:"संपर्क",

heroTitle:"भारत अभ्युदय संस्थान",
heroText:"आपका सहयोग शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण एवं सामाजिक कल्याण के माध्यम से आत्मनिर्भर भारत निर्माण में सहायक है।",

initTitle:"हमारे सेवा प्रयास",
initTagline:
"भारत अभ्युदय संस्थान शिक्षा, स्वास्थ्य, महिला सशक्तिकरण एवं मानवीय सेवा में पारदर्शिता, उत्तरदायित्व और समर्पण के साथ कार्य करता है। प्रत्येक सहयोग सत्यापित लाभार्थियों तक पहुँचाया जाता है।"
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
contact:"Contact",

heroTitle:"Bharat Abhyudaya Sansthan",
heroText:"Your support helps build an Atmanirbhar Bharat.",

initTitle:"Our Initiatives",
initTagline:
"Bharat Abhyudaya Sansthan works with transparency and accountability ensuring verified support reaches genuine beneficiaries."
}

};


/* ================= APPLY LANGUAGE ================= */

function applyLanguage(){

const lang = localStorage.getItem("bas_lang") || "hi";
const d = t[lang];

if(!d) return;

const setText=(id,val)=>{
const el=document.getElementById(id);
if(el) el.textContent=val;
};

/* HEADER */
setText("brandText",d.brand);
setText("brandSub",d.sub);

setText("mHome",d.home);
setText("mAbout",d.about);
setText("mWork",d.work);
setText("mDocs",d.docs);
setText("mDonate",d.donate);
setText("mGallery",d.gallery);
setText("mContact",d.contact);

/* HERO SAFE UPDATE ✅ */
setText("heroTitle",d.heroTitle);
setText("heroText",d.heroText);

setText("initTitle",d.initTitle);
setText("initTagline",d.initTagline);

/* Toggle label */
const label=document.getElementById("langLabel");
if(label){
label.textContent = lang==="hi" ? "हिन्दी" : "English";
}

}


/* ================= ACTIVE MENU ================= */

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
