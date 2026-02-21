function initLang(){

const btnHi=document.getElementById("btnHi");
const btnEn=document.getElementById("btnEn");

if(!btnHi || !btnEn) return;
const translations = {

hi:{
contactBtn:"संपर्क करें",
donateBtn:"दान करें",

initiatives:[
{
tag:"Education",
title:"शिक्षा सारथी (बाल शिक्षा एवं विकास)",
desc:"आर्थिक रूप से कमजोर बच्चों को शिक्षा से जोड़ने का प्रयास।",
impact:"आपका सहयोग बच्चों का भविष्य बदल सकता है।",
trust:"हम पारदर्शिता के साथ कार्य करते हैं।"
},
{
tag:"Women",
title:"महिला सशक्तिकरण",
desc:"महिलाओं को आत्मनिर्भर बनाने हेतु मार्गदर्शन।",
impact:"एक महिला सशक्त तो समाज सशक्त।",
trust:"हर सहयोग जिम्मेदारी से उपयोग किया जाता है।"
},
{
tag:"Health",
title:"स्वास्थ्य सहायता",
desc:"जरूरतमंदों को चिकित्सा सहायता।",
impact:"समय पर सहायता जीवन बचाती है।",
trust:"सभी सहयोग पारदर्शी।"
},
{
tag:"Emergency",
title:"एंबुलेंस सेवा",
desc:"आपातकालीन चिकित्सा परिवहन सहयोग।",
impact:"समय पर मदद जीवनरक्षक।",
trust:"सेवा ही उद्देश्य।"
},
{
tag:"Care",
title:"वृद्धजन सेवा",
desc:"बुजुर्गों की देखभाल एवं सहायता।",
impact:"सम्मानपूर्ण जीवन हमारा लक्ष्य।",
trust:"विश्वास के साथ सेवा।"
},
{
tag:"Skills",
title:"कौशल विकास",
desc:"युवाओं को रोजगार कौशल।",
impact:"आत्मनिर्भर भारत की दिशा।",
trust:"जिम्मेदार सहयोग।"
},
{
tag:"Support",
title:"सामाजिक सहायता",
desc:"संकटग्रस्त परिवारों को सहायता।",
impact:"मानवता सर्वोपरि।",
trust:"पारदर्शी कार्य।"
},
{
tag:"GauSeva",
title:"गौसेवा",
desc:"घायल एवं बेसहारा गौवंश सेवा।",
impact:"करुणा और संस्कृति संरक्षण।",
trust:"समर्पित सेवा।"
},
{
tag:"Heritage",
title:"धरोहर संरक्षण",
desc:"सांस्कृतिक विरासत संरक्षण।",
impact:"भविष्य की पीढ़ियों हेतु संरक्षण।",
trust:"सामाजिक जिम्मेदारी।"
}
]
},

en:{
contactBtn:"Contact",
donateBtn:"Donate Now",

initiatives:[
{
tag:"Education",
title:"Shiksha Sarathi",
desc:"Connecting underprivileged children with education.",
impact:"Your support changes futures.",
trust:"Transparent service."
},
{
tag:"Women",
title:"Women Empowerment",
desc:"Helping women become self-reliant.",
impact:"Empowered women build society.",
trust:"Responsible utilization."
},
{
tag:"Health",
title:"Health Support",
desc:"Medical help for needy people.",
impact:"Timely care saves lives.",
trust:"Transparent work."
},
{
tag:"Emergency",
title:"Ambulance Service",
desc:"Emergency medical transport.",
impact:"Life saving assistance.",
trust:"Service first."
},
{
tag:"Care",
title:"Old Age Care",
desc:"Support for senior citizens.",
impact:"Dignified living.",
trust:"Trusted service."
},
{
tag:"Skills",
title:"Skill Development",
desc:"Employment skill training.",
impact:"Self-reliance growth.",
trust:"Responsible support."
},
{
tag:"Support",
title:"Community Support",
desc:"Relief during crisis.",
impact:"Humanity matters.",
trust:"Transparent help."
},
{
tag:"GauSeva",
title:"GauSeva",
desc:"Care for abandoned cattle.",
impact:"Compassion driven service.",
trust:"Dedicated effort."
},
{
tag:"Heritage",
title:"Heritage Conservation",
desc:"Protecting cultural heritage.",
impact:"Future preservation.",
trust:"Social responsibility."
}
]
}

};
  const t={
hi:{
home:"मुख्य पृष्ठ",
about:"परिचय",
work:"हमारे प्रयास",
docs:"दस्तावेज़",
donate:"दान करें",
gallery:"गैलरी",
contact:"संपर्क",
brand:"भारत अभ्युदय संस्थान",
sub:"अभ्युदय से आत्मनिर्भर भारत तक"
},
en:{
home:"Home",
about:"About",
work:"Our Initiatives",
docs:"Documents",
donate:"Donate Now",
gallery:"Gallery",
contact:"Contact",
brand:"Bharat Abhyudaya Sansthan",
sub:"Upliftment to Self-Reliant India"
}
};

function setLang(lang){

document.querySelectorAll("[data-i18n]")
.forEach(el=>{
el.textContent=t[lang][el.dataset.i18n];
});

document.getElementById("brandText").textContent=t[lang].brand;
document.getElementById("brandSub").textContent=t[lang].sub;

localStorage.setItem("bas_lang",lang);
btnHi.classList.remove("active");
btnEn.classList.remove("active");

if(lang==="hi"){
btnHi.classList.add("active");
}else{
btnEn.classList.add("active");
}
}

document.getElementById("btnHi")
.onclick=()=>setLang("hi");

document.getElementById("btnEn")
.onclick=()=>setLang("en");

const savedLang =
localStorage.getItem("bas_lang") || "hi";

setLang(savedLang);
initInitiativesPage(savedLang);

/* ===== INITIATIVES PAGE CONNECT ===== */

function initInitiativesPage(lang){

const data = translations[lang];

if(!document.getElementById("track")) return;

/* SLIDER TEXT UPDATE */

for(let i=1;i<=9;i++){

if(!data.initiatives) return;

const item = data.initiatives[i-1];

if(!item) continue;

document.getElementById(`k${i}tag`).textContent = item.tag;
document.getElementById(`k${i}a`).textContent   = item.title;
document.getElementById(`k${i}b`).textContent   = item.desc;
document.getElementById(`k${i}c`).textContent   = item.impact;
document.getElementById(`k${i}d`).textContent   = item.trust;

document.getElementById(`k${i}rm`).textContent =
data.contactBtn;

document.getElementById(`k${i}dn`).textContent =
data.donateBtn;

}

}
