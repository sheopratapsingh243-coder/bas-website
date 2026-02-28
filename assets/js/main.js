document.addEventListener("DOMContentLoaded", function () {

// ================= HEADER LOAD =================
fetch("/components/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

setTimeout(()=>{

applyLanguage();
setActiveMenu();

const toggle=document.getElementById("langToggle");

if(toggle){
toggle.addEventListener("click",()=>{

let lang=localStorage.getItem("bas_lang") || "hi";
lang=lang==="hi"?"en":"hi";

localStorage.setItem("bas_lang",lang);

applyLanguage();

});
}

},100);

});


// ================= FOOTER LOAD =================
fetch("/components/footer.html")
.then(res => res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});


// ================= LANGUAGE DATA =================
const t={

/* ================= HINDI ================= */
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

/* INDEX */
visitorLabel:"Visitors",
heroTitle:"भारत अभ्युदय संस्थान",
heroText:"आपका सहयोग शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण एवं सामाजिक कल्याण के माध्यम से आत्मनिर्भर भारत निर्माण में सहायक है।",

legalTitle:"पंजीकरण विवरण",
legalDetails:"Registration No.: FAT/02340/2024-2025 | Date: 05/07/2024 | Valid: 04/07/2029 | PAN: AANAB2855N",

impact1:"बच्चों को सहयोग",
impact2:"चिकित्सा सहायता",
impact3:"गौसेवा सहयोग",
impact4:"वृद्धजन सहायता",

programTitle:"वर्तमान संचालित कार्यक्रम",
donateNow:"दान करें",
readMore:"और पढ़ें",
waText:"WhatsApp",
donateFloat:"❤️ दान करें",

/* ABOUT PAGE */
badgeTop:"Trust • Service • Transparency",
title:"हमारे बारे में",

tagline:"भारत अभ्युदय संस्थान एक सेवा-उन्मुख सामाजिक संस्था है जो शिक्षा, स्वास्थ्य, महिला सशक्तिकरण, वृद्धजन सेवा, गौसेवा एवं सामाजिक सहयोग के क्षेत्रों में कार्यरत है।",

btnWork:"हमारे प्रयास देखें",
btnDonate:"दान करें",

callout:"हमारा उद्देश्य केवल सहायता देना नहीं बल्कि आत्मनिर्भरता की दिशा में आगे बढ़ाना है।",

contactQuickTitle:"त्वरित संपर्क",
addr:"481, शादिपुर खुर्द, जयराम नगर, फतेहपुर (उ.प्र.)",
phLbl:"फोन:",
phones:"8604669454, 7355181465",
emailText:"sheopratapsingh243@gmail.com",

btnContact:"संपर्क करें",
btnDonate2:"दान करें",

mvTitle:"हमारा मिशन, विज़न और मूल्य",
mvSub:"हमारी कार्य-पद्धति सेवा, पारदर्शिता और समाजहित पर आधारित है।",

missionTitle:"मिशन",
missionText:"जरूरतमंद लोगों को शिक्षा, स्वास्थ्य और आत्मनिर्भरता की दिशा में सहयोग देना।",

visionTitle:"विज़न",
visionText:"एक ऐसा भारत जहाँ प्रत्येक व्यक्ति को अवसर और सम्मान प्राप्त हो।",

valuesTitle:"हमारे मूल्य",
valuesList:[
"सेवा-भाव और मानवता",
"पारदर्शिता और जिम्मेदारी",
"स्थानीय जरूरत आधारित कार्य",
"समावेशिता",
"आत्मनिर्भरता"
],

whatTitle:"हम क्या करते हैं",
whatText:"हम समाज के वंचित वर्गों तक सहायता, मार्गदर्शन और स्थायी समाधान पहुँचाने का प्रयास करते हैं।",

areasTitle:"मुख्य कार्य-क्षेत्र",
areasList:[
"बाल शिक्षा एवं विकास",
"स्वास्थ्य सहायता",
"महिला सशक्तिकरण",
"वृद्धजन सेवा",
"आपदा सहायता",
"गौसेवा",
"धरोहर संरक्षण"
],

btnWork2:"हमारे प्रयास",
btnDonate3:"दान करें",

whyTitle:"हमारा तरीका",
whyText:"स्थानीय जरूरतों की पहचान और पारदर्शी सहयोग हमारी कार्यशैली का आधार है।",

stepsTitle:"हमारी प्रक्रिया",
stepsList:[
"जरूरत की पहचान",
"सत्यापन",
"सहयोग",
"फॉलो-अप",
"पारदर्शिता"
],

donorLine:"दान केवल राशि नहीं बल्कि उम्मीद है।",

btnVolunteer:"स्वयंसेवक बनें",
btnDonate4:"दान करें",

whyExistTitle:"हम क्यों अस्तित्व में हैं",

whyExistText:
"समाज में अनेक लोग ऐसे हैं जो अवसरों की कमी के कारण पीछे रह जाते हैं। भारत अभ्युदय संस्थान का उद्देश्य केवल सहायता देना नहीं बल्कि लोगों को आत्मनिर्भर बनने का अवसर प्रदान करना है।",

whyExistQuote:
"सच्ची सेवा वह है जो किसी व्यक्ति को भविष्य के लिए सक्षम बना दे।",

transparencyTitle:"पारदर्शिता और विश्वास",

transparencyText:
"हम प्रत्येक सहयोग को जिम्मेदारी के साथ उपयोग करने के लिए प्रतिबद्ध हैं। संस्था का लक्ष्य है कि प्रत्येक दान सही व्यक्ति तक पहुँचे और उसका वास्तविक प्रभाव दिखाई दे।",

joinTitle:"परिवर्तन की इस यात्रा का हिस्सा बनें",

joinText:
"आपका छोटा सा सहयोग किसी के जीवन में बड़ा परिवर्तन ला सकता है। आइए मिलकर एक आत्मनिर्भर और संवेदनशील समाज का निर्माण करें।",

joinDonate:"❤️ अभी दान करें",
joinVolunteer:"स्वयंसेवक बनें",
  
trustTitle:"हम पर भरोसा क्यों करें?",
trustSub:"हम donor-trust को सर्वोच्च प्राथमिकता देते हैं।",

tr1t:"पंजीकृत संस्था",
tr1d:"संस्था का पंजीकरण एवं PAN उपलब्ध है।",

tr2t:"स्थानीय कार्य",
tr2d:"जमीनी स्तर पर वास्तविक सहायता।",

tr3t:"पारदर्शिता",
tr3d:"दान के उपयोग में स्पष्टता।",
initTitle:"हमारे सेवा प्रयास",

initTagline:
"भारत अभ्युदय संस्थान शिक्षा, स्वास्थ्य, महिला सशक्तिकरण, आपदा सहायता एवं मानवीय सेवा के क्षेत्रों में पूर्ण पारदर्शिता और उत्तरदायित्व के साथ कार्य करता है। प्रत्येक सहयोग सत्यापित लाभार्थियों तक पहुँचाया जाता है।",
},
/* ================= ENGLISH ================= */
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

visitorLabel:"Visitors",
heroTitle:"Bharat Abhyudaya Sansthan",
heroText:"Your support helps build an Atmanirbhar Bharat.",

legalTitle:"Legal Details",
legalDetails:"Registration No.: FAT/02340/2024-2025 | Date: 05/07/2024 | Valid: 04/07/2029 | PAN: AANAB2855N",

impact1:"Children Supported",
impact2:"Medical Help",
impact3:"GauSeva Support",
impact4:"Elderly Assisted",

programTitle:"Current Programmes",
donateNow:"Donate Now",
readMore:"Read More",
waText:"WhatsApp",
donateFloat:"❤️ Donate Now",

badgeTop:"Trust • Service • Transparency",
title:"About Us",

tagline:"Bharat Abhyudaya Sansthan works for education, healthcare and social welfare.",

btnWork:"View Initiatives",
btnDonate:"Donate",

callout:"Our aim is empowerment and self-reliance.",

contactQuickTitle:"Quick Contact",
addr:"Fatehpur, Uttar Pradesh",
phLbl:"Phone:",
phones:"8604669454, 7355181465",
emailText:"sheopratapsingh243@gmail.com",

btnContact:"Contact",
btnDonate2:"Donate",

mvTitle:"Mission, Vision & Values",
mvSub:"Our work is based on service and transparency.",

missionTitle:"Mission",
missionText:"Supporting underprivileged communities.",

visionTitle:"Vision",
visionText:"An empowered and equitable society.",

valuesTitle:"Our Values",
valuesList:[
"Service",
"Transparency",
"Inclusiveness",
"Empowerment"
],

whatTitle:"What We Do",
whatText:"We deliver sustainable social support.",

areasTitle:"Key Areas",
areasList:[
"Education",
"Healthcare",
"Women Empowerment",
"Elderly Care",
"Disaster Relief",
"Cow Protection",
"Heritage Conservation"
],

btnWork2:"Our Initiatives",
btnDonate3:"Donate",

whyTitle:"How We Work",
whyText:"Need assessment and transparent execution.",

stepsTitle:"Our Process",
stepsList:[
"Identification",
"Verification",
"Support",
"Follow-up",
"Transparency"
],

donorLine:"Donation creates hope.",

btnVolunteer:"Volunteer",
btnDonate4:"Donate",

  whyExistTitle:"Why We Exist",

whyExistText:
"Many communities lack access to opportunities. Our mission is not just to provide aid but to empower individuals towards self-reliance.",

whyExistQuote:
"True service empowers people for a better future.",

transparencyTitle:"Transparency & Trust",

transparencyText:
"We ensure responsible utilisation of every contribution with measurable social impact.",

joinTitle:"Be Part of the Change",

joinText:
"Your small contribution can create a meaningful impact in someone's life.",

joinDonate:"❤️ Donate Now",
joinVolunteer:"Become a Volunteer",
  
trustTitle:"Why Trust Us?",
trustSub:"Donor trust is our priority.",

tr1t:"Registered Organisation",
tr1d:"Legal registration available.",

tr2t:"Grassroot Work",
tr2d:"Real local impact.",

tr3t:"Transparency",
tr3d:"Responsible fund usage."
  initTitle:"Our Initiatives",

initTagline:
"Bharat Abhyudaya Sansthan works with transparency and accountability in education, healthcare, women empowerment and humanitarian services ensuring verified support reaches genuine beneficiaries.",
}

};


// ================= APPLY LANGUAGE =================
function applyLanguage(){

const lang=localStorage.getItem("bas_lang") || "hi";
const d=t[lang];

const setText=(id,val)=>{
const el=document.getElementById(id);
if(el) el.textContent=val;
};

const setList=(id,arr)=>{
const el=document.getElementById(id);
if(!el || !arr) return;
el.innerHTML="";
arr.forEach(i=>{
const li=document.createElement("li");
li.textContent=i;
el.appendChild(li);
});
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

Object.keys(d).forEach(k=>{
const el=document.getElementById(k);
if(el && !el.closest(".hero")){
el.textContent=d[k];
}
});

setList("valuesList",d.valuesList);
setList("areasList",d.areasList);
setList("stepsList",d.stepsList);

/* Toggle */
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
