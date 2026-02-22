/* =====================================
   GLOBAL LANGUAGE SYSTEM
=====================================*/

function initLang(){

const btnHi = document.getElementById("btnHi");
const btnEn = document.getElementById("btnEn");

if(!btnHi || !btnEn) return;


/* ========= HEADER TRANSLATIONS ========= */

const headerText = {

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

const heroText = {

hi:{
title:"हमारे प्रयास",
tagline:"हम शिक्षा, स्वास्थ्य, महिला सशक्तिकरण, गौसेवा, वृद्धजन सेवा और सामाजिक सहायता जैसे क्षेत्रों में निरंतर कार्य कर रहे हैं।",
donate:"दान करें",
join:"हमसे जुड़ें",
note:"हमारा प्रयास है कि हर सहयोग पारदर्शिता के साथ जरूरतमंदों तक पहुँचे।",
focus:"हमारा फोकस",
f1t:"सही जगह, सही समय",
f1d:"हम स्थानीय स्तर पर वास्तविक जरूरतों को समझकर सहायता पहुँचाने का प्रयास करते हैं।",
f2t:"पारदर्शिता",
f2d:"हम हर योगदान को जिम्मेदारी और स्पष्टता के साथ उपयोग करने के लिए प्रतिबद्ध हैं।"
},

en:{
title:"Our Initiatives",
tagline:"We work in education, health, women empowerment, gau seva, elderly care and community support.",
donate:"Donate Now",
join:"Get Involved",
note:"We ensure every contribution reaches the needy transparently.",
focus:"Our Focus",
f1t:"Right Help, Right Time",
f1d:"We understand real needs at local level.",
f2t:"Transparency",
f2d:"Every contribution is used responsibly."
}

};
/* ========= INITIATIVES DATA ========= */

const initiativesData = {

hi:{
contactBtn:"संपर्क करें",
donateBtn:"दान करें",

initiatives:[
{tag:"Education",title:"शिक्षा सारथी",desc:"आर्थिक रूप से कमजोर बच्चों को शिक्षा से जोड़ना।",impact:"आपका सहयोग भविष्य बदल सकता है।",trust:"पारदर्शी सेवा।"},
{tag:"Women",title:"महिला सशक्तिकरण",desc:"महिलाओं को आत्मनिर्भर बनाना।",impact:"सशक्त महिला, सशक्त समाज।",trust:"जिम्मेदार उपयोग।"},
{tag:"Health",title:"स्वास्थ्य सहायता",desc:"जरूरतमंदों को चिकित्सा सहयोग।",impact:"समय पर इलाज जीवन बचाता है।",trust:"विश्वसनीय सेवा।"},
{tag:"Emergency",title:"एंबुलेंस सेवा",desc:"आपातकालीन परिवहन सहायता।",impact:"जीवनरक्षक सहयोग।",trust:"सेवा सर्वोपरि।"},
{tag:"Care",title:"वृद्धजन सेवा",desc:"बुजुर्गों की देखभाल।",impact:"सम्मानपूर्ण जीवन।",trust:"विश्वास आधारित सेवा।"},
{tag:"Skills",title:"कौशल विकास",desc:"युवाओं को रोजगार कौशल।",impact:"आत्मनिर्भरता।",trust:"सामाजिक जिम्मेदारी।"},
{tag:"Support",title:"सामाजिक सहायता",desc:"संकटग्रस्त परिवार सहायता।",impact:"मानवता सर्वोपरि।",trust:"पारदर्शी कार्य।"},
{tag:"GauSeva",title:"गौसेवा",desc:"घायल गौवंश सेवा।",impact:"करुणा संरक्षण।",trust:"समर्पण।"},
{tag:"Heritage",title:"धरोहर संरक्षण",desc:"सांस्कृतिक विरासत संरक्षण।",impact:"भविष्य सुरक्षा।",trust:"सामाजिक दायित्व।"}
]
},

en:{
contactBtn:"Contact",
donateBtn:"Donate Now",

initiatives:[
{tag:"Education",title:"Shiksha Sarathi",desc:"Connecting children with education.",impact:"Support changes futures.",trust:"Transparent service."},
{tag:"Women",title:"Women Empowerment",desc:"Helping women become self-reliant.",impact:"Empowered society.",trust:"Responsible usage."},
{tag:"Health",title:"Health Support",desc:"Medical help for needy.",impact:"Timely care saves lives.",trust:"Trusted service."},
{tag:"Emergency",title:"Ambulance Service",desc:"Emergency transport.",impact:"Life saving help.",trust:"Service first."},
{tag:"Care",title:"Old Age Care",desc:"Support for elders.",impact:"Dignified living.",trust:"Trusted work."},
{tag:"Skills",title:"Skill Development",desc:"Employment skills.",impact:"Self reliance.",trust:"Responsible support."},
{tag:"Support",title:"Community Support",desc:"Relief during crisis.",impact:"Humanity matters.",trust:"Transparent help."},
{tag:"GauSeva",title:"GauSeva",desc:"Care for cattle.",impact:"Compassion driven.",trust:"Dedicated effort."},
{tag:"Heritage",title:"Heritage Conservation",desc:"Protecting heritage.",impact:"Future preservation.",trust:"Social responsibility."}
]
}

};


/* ========= LANGUAGE APPLY ========= */

function setLang(lang){

/* header menu */
document.querySelectorAll("[data-i18n]")
.forEach(el=>{
el.textContent =
headerText[lang][el.dataset.i18n];
});

/* brand */
const brand=document.getElementById("brandText");
const sub=document.getElementById("brandSub");

if(brand) brand.textContent=headerText[lang].brand;
if(sub) sub.textContent=headerText[lang].sub;

localStorage.setItem("bas_lang",lang);

/* initiatives page update */
initInitiativesPage(lang);
updateInitiativesHero(lang);
/* toggle active */
btnHi.classList.remove("active");
btnEn.classList.remove("active");

(lang==="hi"?btnHi:btnEn)
.classList.add("active");

}


/* ========= INITIATIVES HERO UPDATE ========= */
function updateInitiativesHero(lang){

/* ✅ run ONLY on initiatives page */
if(!document.getElementById("track")) return;

const h = heroText[lang];

const title = document.getElementById("title");
const tagline = document.getElementById("tagline");
const donateTop = document.getElementById("donateTop");
const contactTop = document.getElementById("contactTop");
const noteTop = document.getElementById("noteTop");

if(title) title.textContent = h.title;
if(tagline) tagline.textContent = h.tagline;
if(donateTop) donateTop.textContent = h.donateBtn;
if(contactTop) contactTop.textContent = h.contactBtn;
if(noteTop) noteTop.textContent = h.note;
}
function initInitiativesPage(lang){

if(!document.getElementById("track")) return;

const data=initiativesData[lang];

for(let i=1;i<=9;i++){

const item=data.initiatives[i-1];
if(!item) continue;

document.getElementById(`k${i}tag`).textContent=item.tag;
document.getElementById(`k${i}a`).textContent=item.title;
document.getElementById(`k${i}b`).textContent=item.desc;
document.getElementById(`k${i}c`).textContent=item.impact;
document.getElementById(`k${i}d`).textContent=item.trust;

document.getElementById(`k${i}rm`).textContent=
data.contactBtn;

document.getElementById(`k${i}dn`).textContent=
data.donateBtn;

}

}


/* ========= BUTTON EVENTS ========= */

btnHi.onclick=()=>setLang("hi");
btnEn.onclick=()=>setLang("en");


/* ========= INIT ========= */

const saved=
localStorage.getItem("bas_lang") || "hi";

setLang(saved);

}
