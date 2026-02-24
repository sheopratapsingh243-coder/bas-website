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

applyLanguage(); // instant change

});
}

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
contact:"संपर्क",

/* ===== INDEX PAGE ===== */
visitorLabel:"Visitors",

heroTitle:"भारत अभ्युदय संस्थान",

heroText:
"आपका सहयोग शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण एवं सामाजिक कल्याण के माध्यम से आत्मनिर्भर भारत निर्माण में सहायक है।",

legalTitle:"पंजीकरण विवरण",

legalDetails:
"Registration No.: FAT/02340/2024-2025 | Date: 05/07/2024 | Valid: 04/07/2029 | PAN: AANAB2855N",

impact1:"बच्चों को सहयोग",
impact2:"चिकित्सा सहायता",
impact3:"गौसेवा सहयोग",
impact4:"वृद्धजन सहायता",

programTitle:"वर्तमान संचालित कार्यक्रम",

donateNow:"दान करें",
readMore:"और पढ़ें",

waText:"WhatsApp",
donateFloat:"❤️ दान करें"
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

/* ===== INDEX PAGE ===== */
visitorLabel:"Visitors",

heroTitle:"Bharat Abhyudaya Sansthan",

heroText:
"Your support helps build an Atmanirbhar Bharat through education, healthcare, women empowerment and social welfare initiatives.",

legalTitle:"Legal / Registration Details",

legalDetails:
"Registration No.: FAT/02340/2024-2025 | Date: 05/07/2024 | Valid: 04/07/2029 | PAN: AANAB2855N",

impact1:"Children Supported",
impact2:"Medical Help",
impact3:"GauSeva Support",
impact4:"Elderly Assisted",

programTitle:"Current Running Programmes",

donateNow:"Donate Now",
readMore:"Read More",

waText:"WhatsApp",
donateFloat:"❤️ Donate Now"
}

};


// ================= APPLY LANGUAGE =================
function applyLanguage(){

const lang=localStorage.getItem("bas_lang") || "hi";
const d=t[lang];

const setText=(id,value)=>{
const el=document.getElementById(id);
if(el) el.textContent=value;
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

/* INDEX PAGE */
setText("visitorLabel",d.visitorLabel);

setText("heroTitle",d.heroTitle);
setText("heroText",d.heroText);

setText("legalTitle",d.legalTitle);
setText("legalDetails",d.legalDetails);

setText("impact1",d.impact1);
setText("impact2",d.impact2);
setText("impact3",d.impact3);
setText("impact4",d.impact4);

setText("programTitle",d.programTitle);

setText("donateNow",d.donateNow);
setText("readMore",d.readMore);

setText("waText",d.waText);
setText("donateFloat",d.donateFloat);

/* Toggle Label */
const label=document.getElementById("langLabel");
if(label){
label.textContent=lang==="hi"?"हिन्दी":"English";
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
