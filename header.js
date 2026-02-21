fetch("components/header.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("header").innerHTML=data;

/* wait until header buttons exist */
setTimeout(()=>{
if(typeof initLang==="function"){
initLang();
}
},100);

});
