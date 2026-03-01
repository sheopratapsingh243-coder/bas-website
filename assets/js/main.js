document.addEventListener("DOMContentLoaded", function () {

/* ================= HEADER LOAD ================= */

fetch("components/header.html")
.then(res => res.text())
.then(data => {

const headerContainer = document.getElementById("header");

if(headerContainer){
headerContainer.innerHTML = data;
}

/* AFTER HEADER LOAD */
setTimeout(()=>{

initAfterHeader();
applyLanguage();

/* AUTO HEADER HEIGHT */
const gh = document.getElementById("globalHeader");
if(gh){
document.body.style.paddingTop =
gh.offsetHeight + "px";
}

},60);

})
.catch(err=>{
console.error("Header load failed:",err);
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

setActiveMenu();

const toggle=document.getElementById("langToggle");

if(toggle){
toggle.addEventListener("click",()=>{

let lang =
localStorage.getItem("bas_lang") || "hi";

lang = lang==="hi" ? "en" : "hi";

localStorage.setItem("bas_lang",lang);

applyLanguage();

});
}

}


/* ================= LANGUAGE DATA ================= */

const t = {

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
"भारत अभ्युदय संस्थान शिक्षा, स्वास्थ्य, महिला सशक्तिकरण एवं मानवीय सेवा में पारदर्शिता और उत्तरदायित्व के साथ कार्य करता है।",
/* ===== ABOUT PAGE ===== */

badgeTop:"परिचय",

tagline:
"शिक्षा, स्वास्थ्य, महिला सशक्तिकरण एवं सामाजिक सेवा के माध्यम से आत्मनिर्भर समाज निर्माण हेतु समर्पित संस्था।",

btnWork:"हमारे प्रयास देखें",
btnDonate:"दान करें",

callout:
"हम पारदर्शिता, उत्तरदायित्व एवं मानवीय सेवा के सिद्धांतों पर कार्य करते हैं।",

legalTitle:"कानूनी विवरण",
legalBox:
"Registration No: FAT/02340/2024-2025 | PAN: AANAB2855N",

contactQuickTitle:"त्वरित संपर्क",
phLbl:"फोन:",
addr:"फतेहपुर, उत्तर प्रदेश",

whyExistTitle:"हम क्यों अस्तित्व में हैं",
whyExistText:
"समाज के वंचित एवं जरूरतमंद वर्ग तक वास्तविक सहायता पहुँचाने के उद्देश्य से संस्था कार्यरत है।",

whyExistQuote:
"सेवा ही समाज परिवर्तन का सबसे प्रभावी माध्यम है।",

missionTitle:"हमारा मिशन",
missionText:
"जरूरतमंद व्यक्तियों को शिक्षा, स्वास्थ्य एवं सामाजिक सहयोग उपलब्ध कराना।",

visionTitle:"हमारा विजन",
visionText:
"आत्मनिर्भर, शिक्षित एवं सशक्त भारत का निर्माण।"
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
"Bharat Abhyudaya Sansthan works with transparency ensuring verified support reaches genuine beneficiaries.",
  /* ===== ABOUT PAGE ===== */

badgeTop:"About Us",

tagline:
"A social organization working for education, healthcare and empowerment.",

btnWork:"View Initiatives",
btnDonate:"Donate Now",

callout:
"We work with transparency, accountability and humanitarian values.",

legalTitle:"Legal Details",
legalBox:
"Registration No: FAT/02340/2024-2025 | PAN: AANAB2855N",

contactQuickTitle:"Quick Contact",
phLbl:"Phone:",
addr:"Fatehpur, Uttar Pradesh",

whyExistTitle:"Why We Exist",
whyExistText:
"Our mission is to deliver verified support to the needy sections of society.",

whyExistQuote:
"Service is the strongest driver of social change.",

missionTitle:"Our Mission",
missionText:
"Providing education, healthcare and humanitarian assistance.",

visionTitle:"Our Vision",
visionText:
"Building a self-reliant and empowered India."
}

};


/* ================= APPLY LANGUAGE ================= */

function applyLanguage(){

const lang =
localStorage.getItem("bas_lang") || "hi";

const d = t[lang];
if(!d) return;

const setText=(id,val)=>{
const el=document.getElementById(id);
if(el && val!==undefined){
el.textContent = val;
}
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

/* ===== PAGE BASED TRANSLATION ===== */

const page=document.body.className;

/* HOME */
if(page.includes("homePage")){
setText("heroTitle",d.heroTitle);
setText("heroText",d.heroText);
setText("initTitle",d.initTitle);
setText("initTagline",d.initTagline);
}

/* INITIATIVES */
if(page.includes("initiativesPage")){
setText("initTitle",d.initTitle);
setText("initTagline",d.initTagline);
}

/* ABOUT */
if(page.includes("aboutPage")){

setText("badgeTop",d.badgeTop);
setText("title",d.brand);
setText("tagline",d.tagline);

setText("btnWork",d.btnWork);
setText("btnDonate",d.btnDonate);

setText("callout",d.callout);

setText("legalTitle",d.legalTitle);
setText("legalBox",d.legalBox);

setText("contactQuickTitle",d.contactQuickTitle);
setText("phLbl",d.phLbl);
setText("addr",d.addr);

setText("whyExistTitle",d.whyExistTitle);
setText("whyExistText",d.whyExistText);
setText("whyExistQuote",d.whyExistQuote);

setText("missionTitle",d.missionTitle);
setText("missionText",d.missionText);

setText("visionTitle",d.visionTitle);
setText("visionText",d.visionText);

}

/* DONATE */
if(page.includes("donatePage")){
setText("title",d.donate);
}

/* DOCUMENTS */
if(page.includes("docsPage")){
setText("title",d.docs);
}

/* CONTACT */
if(page.includes("contactPage")){
setText("contactTitle",d.contact);
}

/* GALLERY */
if(page.includes("galleryPage")){
setText("titleText",d.gallery);
}
/* Toggle Label */
const label=document.getElementById("langLabel");
if(label){
label.textContent =
lang==="hi" ? "English" : "हिन्दी";
}

}


/* ================= ACTIVE MENU ================= */

function setActiveMenu(){

const current =
location.pathname.split("/").pop();

document.querySelectorAll(".menu a")
.forEach(link=>{
if(link.getAttribute("href")
.includes(current)){
link.style.color="#0b5aa6";
}
});

}

});
