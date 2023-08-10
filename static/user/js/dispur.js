document.getElementById("writeReview").addEventListener("click", () => {
  document.getElementById('cls-mainbox').classList.remove('hide')})
document.getElementById("saveReview").addEventListener("click", () => {
  document.getElementById('reviewPopup-NE').classList.remove('hide')})
document.getElementById('clsX').addEventListener("click", () => {
  document.getElementById('cls-mainbox').classList.add('hide')})
document.getElementById('Xclse').addEventListener("click", () => {
  document.getElementById('reviewPopup-NE').classList.add('hide')})
function Cl_opnForm() {document.getElementsByClassName('registration-form')[0].style.display = 'none'}
//2nd part-------------------------------------------------
let i_d = location.pathname.split('/')[1];
async function FETchData(link) {
  let res = await fetch(`${link}`);
  return await res.json(); 
}

async function displayDataWithRateandRev() {
  let dataWithRevRat = await FETchData(`${location.origin}/apiV3/r/fn/${i_d}`)
  dataWithRevRat.forEach(ell => {let clinic = document.getElementById('clinicid').childNodes;
    clinic[1].innerHTML = ell.c_name;
    clinic[3].childNodes[1].innerHTML = `${ell.star.toFixed(1)}&#9733;`;
    clinic[3].childNodes[3].innerHTML = `(${ell.total_review}+ Ratings)`;
  })
}
  async function DataOfRevrat() {
    let revRat =  await FETchData(`${location.origin}/apiV3/r/revv/${i_d}`);
    let box = document.getElementById('review')
    revRat.forEach((el) => {
      let html = `<div class="customerReview-profile">
    <div class="reviewProfile-name">
    <i class="uil uil-user-square "></i>
    <p>${el.userName}</p>
    </div>
    <div class="reviewProfile-stars">
        <label for="5" class="uis uis-star"></label>
        <label for="5" class="uis uis-star"></label>
        <label for="5" class="uis uis-star"></label>
        <label for="5" class="uis uis-star"></label>
        <label for="5" class="uis uis-star"></label>
    </div>
    <div class="reviewProfile-text">
        <p>${el.review}</p>
    </div>
</div>
<hr>`
 if (el.review != null) { box.insertAdjacentHTML('afterbegin', html);}
  })}

displayDataWithRateandRev();
DataOfRevrat();

//3rd part ===============submitting star and review-----------------------
const star = document.querySelectorAll("#star");
console.log(document.querySelector('.review-form-details').childNodes[7].childNodes);
let a;
star.forEach((el)=> {el.addEventListener("click", ()=>{a = el.dataset.val;})})
const submitReview = document.getElementById('submit-review');
async function getRatePoint() {
  const revForm = document.querySelector('.review-form-details').childNodes;
  let review = document.getElementById('cus-review').value;
  let name = revForm[5].childNodes[3].value;
  let email_id = revForm[7].childNodes[3].value;
  let validationRes = {nValid: valid.regName(name), eValid: valid.regEmail(email_id)};
if (validationRes.nValid === true && validationRes.eValid === true) {
  document.getElementById('cls-mainbox').classList.add('hide')
  document.getElementById('reviewPopup-NE').classList.add('hide')
  let valu = {idNum: i_d,rating: 4, review: review, u_name: name, mail: email_id};
  const SendRatRev = await fetch('/apiV3/r/rv', {method: 'POST',body: JSON.stringify(valu),headers: {'Content-Type': 'application/json'}});
  const result = await SendRatRev.json();
  Obj.flashMsg(result.msg, '', 200);
}else{document.getElementById('err-Msg').innerHTML = 'Name and Email is required properly!'}} 
submitReview.addEventListener('click', getRatePoint);

//Zoom photo effects===========================================================

Array.from(document.getElementsByTagName('img')).forEach(function (el) {
  el.addEventListener('click', () => {
    document.getElementById('photo-Box').classList.remove('hide')
    document.getElementById('photoBox').src = el.src;
  })
})
document.getElementById('pclose').addEventListener('click', () => {
  document.getElementById('photo-Box').classList.add('hide')
})

// Request Handler.js
let doc = document.getElementsByClassName('user-details')[0].children
let ReqURI = { FormSet: location.origin + '/apiV3/add?user=' }
let ReqHandler = {
  GET: async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    }); return response.json();
  },
  POST: async function (url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: JSON.stringify(data)
    }); return response.json();
  }
}
const userReq = {
  FormSet: function () {
    let val = document.getElementsByClassName('user-details')[0].children;
    let ap_date = dSplit(doc[3].children[1].value, '-', true)
    let data = { name: doc[0].children[1].value, number: doc[1].children[1].value, doctor: doc[2].children[1].value, date: ap_date, otherInfo: doc[4].children[1].value }
    ReqHandler.POST(ReqURI.FormSet + location.pathname.split('/')[1], data).then((data) => {
      Cl_opnForm();if (data.status) { 
        correctAlert() ;
       }else { wrongAlert();}
    })
  }
}
  // ABout Know More Text 
    const detailContainer = document.querySelector('.details');
    detailContainer.addEventListener('click', event=>{
      const detail = event.target;
      const isDetailsmoreBtn = detail.className.includes('detailsMore-btn');
      if(!isDetailsmoreBtn) return;
      const detailText = event.target.parentNode.querySelector('.detailsText');
      detailText.classList.toggle('detailsText--show');
      detail.textContent = detail.textContent.includes('Know More') ?
      "Know Less...." : "Know More...."  
    })

//validation form--------------------------------
let valid = {
  pat: {
    pat1: /^[A-Za-z. ]+$/, pat3:/^[A-Za-z.@0-9 ]+$/, pat4: /[@]/g, pat5: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, pat6 : /^\+?[1-9][0-9]{9}$/
  },
  regTextBox: function (val) {
    if (val === '' || this.pat.pat3.test(val)) {return true;}else{return 'Character are invalid!'}
  }, regEmail: function (val) {
    let v = val.replace(/\s/g,"")
    if (this.pat.pat5.test(v)) { return true; } else { return 'Invalid Email'; }
  }, regNumber: function (val) {
    if (this.pat.pat6.test(val)) {return true;}else{return 'Invalid Number'}
  }, regName: function (val) {
     if (this.pat.pat1.test(val)) {return true;}else{return 'Invalid Name'}
  }, regReq: function (val) {
    if (val === '') {return false;} else { return true }
  },
  ValResult: function result(name, number, date, text) {
    let result = {reName: this.regName(name), reNumber: this.regNumber(number), reText: this.regTextBox(text)}
    let fieldEmpty = { reEmptya: this.regReq(name), reEmptyc: this.regReq(number), reEmptyd : this.regReq(date) };
    if (fieldEmpty.reEmptya === true && fieldEmpty.reEmptyc === true && fieldEmpty.reEmptyd === true) {
      if (result.reName != true) { return result.reName;} 
    else if (result.reNumber != true) {return result.reNumber;} else if (result.reText != true) {return result.reText;
      } else { return true; }} else { return 'Field cant be empty!'; }
  }
}

function formSubmit() {
  let ap_date = dSplit(doc[3].children[1].value, '-', true)
  let data = { name: doc[0].children[1].value, number: doc[1].children[1].value, doctor: doc[2].children[1].value,
   date: ap_date, otherInfo: doc[4].children[1].value }
   let res = valid.ValResult(data.name, data.number, data.date, data.otherInfo);
   if (res === true) {userReq.FormSet();}else{document.getElementById('err-msg').innerHTML = res;}
}
document.getElementById('btnn').addEventListener('click', formSubmit)
function closeWindow(){document.querySelector('.booked-msg').classList.add('hide');}

function correctAlert() {
  document.querySelector('.booked-msg').classList.remove('hide')
  document.querySelector('#check-circle-2nd').classList.add('hide')
  document.querySelector('.alert').classList.remove('Wrong');
  document.querySelector('#smsConfirm').classList.remove('Wrong');
}
function wrongAlert() {
  document.querySelector('.booked-msg').classList.remove('hide')
  document.querySelector('#check-circle').classList.add('hide')
  document.querySelector('#cancel-highlight').innerHTML = "Not Confirmed";
  document.querySelector('#cancel-msg').innerHTML = "Appointment slot is not available for the particular date";
  document.querySelector('.alert').classList.remove('Correct');
  document.querySelector('#smsConfirm').classList.remove('Correct');
}

