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
"भारत अभ्युदय संस्थान शिक्षा, स्वास्थ्य, महिला सशक्तिकरण एवं मानवीय सेवा में पारदर्शिता और उत्तरदायित्व के साथ कार्य करता है।"
},
gauTag:"गौ सेवा",
gauTitle:"गौसेवा एवं गौशाला सहयोग",
gauDesc:
"संस्था निराश्रित एवं असहाय गौवंश के संरक्षण, पोषण एवं चिकित्सा सहायता हेतु निरंतर कार्य कर रही है। गौशालाओं को चारा, उपचार एवं देखभाल सहयोग प्रदान किया जाता है। यह पहल केवल पशु सेवा नहीं बल्कि भारतीय संस्कृति, पर्यावरण संतुलन एवं मानवीय संवेदनाओं के संरक्षण का भी माध्यम है।",
gauImpact:
"₹1100 सहयोग = एक गौमाता के भोजन एवं देखभाल में सहायता।",
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
"Bharat Abhyudaya Sansthan works with transparency ensuring verified support reaches genuine beneficiaries."
}

};
gauTag:"Cow Protection",
gauTitle:"GauSeva & Gaushala Support",
gauDesc:
"The organization supports shelter, nutrition and medical care for abandoned and injured cattle. Assistance is provided to local gaushalas ensuring proper feeding and treatment. This initiative promotes compassion, ecological balance and preservation of cultural values.",
gauImpact:
"₹1100 support helps care for one rescued cow.",

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
setText("title",d.brand);
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
