document.addEventListener("DOMContentLoaded", function () {

/* ================= HEADER LOAD ================= */

fetch("/components/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data;

/* ✅ WAIT until header exists */
setTimeout(()=>{

applyLanguage();
setActiveMenu();

const toggle=document.getElementById("langToggle");

if(toggle){
toggle.addEventListener("click",()=>{

let lang=localStorage.getItem("bas_lang") || "hi";
lang = lang==="hi" ? "en" : "hi";

localStorage.setItem("bas_lang",lang);

applyLanguage();

});
}

},150);

});


/* ================= FOOTER LOAD ================= */

fetch("/components/footer.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});


/* ================= LANGUAGE APPLY ================= */

function applyLanguage(){

const lang = localStorage.getItem("bas_lang") || "hi";
const d = t[lang];

const bodyClass=document.body.className;

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


/* ===== HEADER GLOBAL ===== */

setText("brandText",d.brand);
setText("brandSub",d.sub);

setText("mHome",d.home);
setText("mAbout",d.about);
setText("mWork",d.work);
setText("mDocs",d.docs);
setText("mDonate",d.donate);
setText("mGallery",d.gallery);
setText("mContact",d.contact);


/* ===== ABOUT PAGE ===== */

if(bodyClass.includes("aboutPage")){

Object.keys(d).forEach(k=>{
if(typeof d[k]==="string"){
setText(k,d[k]);
}
});

setList("valuesList",d.valuesList);
setList("areasList",d.areasList);
setList("stepsList",d.stepsList);
}


/* ===== HOME PAGE ===== */

if(bodyClass.includes("homePage")){
setText("heroTitle",d.heroTitle);
setText("heroText",d.heroText);
}


/* ===== INITIATIVES PAGE ===== */
/* hero intentionally static */


/* Toggle label */

const label=document.getElementById("langLabel");
if(label){
label.textContent=
lang==="hi"?"हिन्दी":"English";
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
