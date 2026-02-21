function initLang(){

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
contact:"Gallery",
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

localStorage.setItem("lang",lang);
}

document.getElementById("btnHi")
.onclick=()=>setLang("hi");

document.getElementById("btnEn")
.onclick=()=>setLang("en");

setLang(localStorage.getItem("lang")||"hi");
}
