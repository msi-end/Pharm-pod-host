let navlist = document.getElementById('navlist');
let navDisp = true;
document.getElementById('nav-menu').addEventListener('click', function () {
    if (navDisp) {
        navlist.style.left = 0;
        navDisp = false;
    } else {
        navlist.style.left = '-100%';
        navDisp = true;
    }
});

// Obj and anim Flash
let Obj = {
    flashMsg: function (h, p, e) {
        let msgBody = document.getElementById('msg_bx')
        let ctn = document.getElementById('msg_Ctn').children;
        ctn[0].children[0].classList.add(e ? 'uil-check-circle' : 'uil-exclamation-triangle');
        ctn[1].children[0].innerHTML = h; ctn[1].children[1].innerHTML = p;
        ctn[0].parentElement.style.background = `${e ? 'linear-gradient(to bottom,#86efac,#00d54e)' : 'linear-gradient(to bottom,#f87171,#ef4444)'}`
        msgBody.style.display = 'block'; this.Anim(msgBody, 'animate__backInUp', true)
        setTimeout(() => {
            this.Anim(msgBody, 'animate__backInUp', false)
            this.Anim(msgBody, 'animate__bounceOut', true)
            setTimeout(() => { msgBody.style.display = 'none'; this.Anim(msgBody, 'animate__bounceOut', false) }, 600);
            ctn[0].children[0].classList.remove(e ? 'uil-check-circle' : 'uil-exclamation-triangle')
        }, 1300);
    },
    Anim: function (obj, animType, dpOpt) { dpOpt ? obj.classList.add(animType) : obj.classList.remove(animType) }
}
function dSplit(val, p, t) { let [d, m, y] = val.split(p); return t ? `${y}/${m}/${d}` : `${y}-${m}-${d}` }
function dateFn(e) {
    let dtEm = document.getElementById(e); let tdy = new Date(); if (dtEm) {
        let tdyVal = tdy.toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" })
        let odt = new Date(tdy.setDate(tdy.getDate() - parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" });
        let ndt = new Date(tdy.setDate(tdy.getDate() + parseInt(dtEm.dataset.max) + parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit"});
        console.log(dSplit(tdyVal, '/', false));
        dtEm.defaultValue = dSplit(tdyVal, '/', false); dtEm.min = dSplit(odt, '/', false); dtEm.max = dSplit(ndt, '/', false);
    }
}
dateFn('formDate');
// USE  


//slider js
var slideIndex = 0;
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
if (location.pathname == '/') { showSlides(); }














// Host Master 




