
const _0x58ec88 = _0x48b3; (function (_0x2f90f6, _0x111d1f) { const _0x1c9f22 = _0x48b3, _0x89679d = _0x2f90f6(); while (!![]) { try { const _0x46df63 = -parseInt(_0x1c9f22(0x188)) / 0x1 * (parseInt(_0x1c9f22(0x18a)) / 0x2) + parseInt(_0x1c9f22(0x189)) / 0x3 + -parseInt(_0x1c9f22(0x186)) / 0x4 + parseInt(_0x1c9f22(0x18d)) / 0x5 + -parseInt(_0x1c9f22(0x187)) / 0x6 + -parseInt(_0x1c9f22(0x18b)) / 0x7 + parseInt(_0x1c9f22(0x184)) / 0x8; if (_0x46df63 === _0x111d1f) break; else _0x89679d['push'](_0x89679d['shift']()); } catch (_0x1cceda) { _0x89679d['push'](_0x89679d['shift']()); } } }(_0x1eaf, 0x46ea9)); function _0x48b3(_0x556f0c, _0x2cb638) { const _0x1eaf50 = _0x1eaf(); return _0x48b3 = function (_0x48b331, _0x372258) { _0x48b331 = _0x48b331 - 0x182; let _0x4c1909 = _0x1eaf50[_0x48b331]; return _0x4c1909; }, _0x48b3(_0x556f0c, _0x2cb638); } function _0x1eaf() { const _0x40b09c = ['dataset', '3167168rFnQHp', 'action', '550304hwwiXX', '2596338InlUwa', '249091ksHNGA', '1572135ChBpJK', '2wCGNYN', '1142372OHkELr', 'bottomNav', '1765590ktyhQJ', 'children', 'pathname', 'removeAttribute', 'split']; _0x1eaf = function () { return _0x40b09c; }; return _0x1eaf(); } let path = window['location'][_0x58ec88(0x18f)][_0x58ec88(0x182)]('/'), bottomNav = document['getElementById'](_0x58ec88(0x18c)); if (path['length'] == 0x4) for (let i = 0x0; i < bottomNav[_0x58ec88(0x18e)]['length']; i++) { bottomNav[_0x58ec88(0x18e)][i][_0x58ec88(0x190)](_0x58ec88(0x185)), path[0x3] == bottomNav[_0x58ec88(0x18e)][i][_0x58ec88(0x183)]['n'] && bottomNav['children'][i]['setAttribute']('action', ''); }

// function EventHandler(element, eventType, fn) {const event = document.querySelector(`[${element}]`)
//     event.addEventListener(eventType, fn);}
let navL = document.getElementById('bottomNav').getElementsByTagName('a');
for (const e of navL) {
  e.addEventListener('click', function () {
    let l3e = location.pathname.split('/'); location.pathname = `/${l3e[1]}/${l3e[2]}/${this.dataset.n}`
  })}

// max, auto, off/On ,Anim
globalThis.mdlOpn = true
const userAction = {
  panel_Exp: function (e) {
    globalThis.pnlbx = document.getElementById('panel');
    pnlbx.style.display = 'block';
    this.Anim(pnlbx, 'animate__slideInUp', true)
    if (!e.data >= 0) {
      for (let o = 0; o < e.data.length; o++) {
        let list = `<div class="patientInfo">
        <div class="psNum"><span class="uil uil-user-square"></span><span>No:${e.data[o].id}</span></div>
<div class="psDetail"><h3>${e.data[o].p_name}</h3><p id="numb" class="ps-num">${e.data[o].p_number}</p>
<b>Doctor:</b> <span>${e.data[o].p_doctor}</span><p><b>Add. Info:</b>${e.data[o].p_OthInfo}</p><p>
<b>DOA:</b>${e.data[o].p_aptDate}</p></div></div>`
pnlbx.children[1].innerHTML += list;}
    } else { let list = `<p>No Data Found!<p>` }
  },
  panel_cls: function (e) {
    pnlbx.style.display = 'none';
    pnlbx.children[1].innerHTML = '';
    this.Anim(pnlbx, 'animate__slideInUp', 'rm')
  },
   del: function (e) {
    let data = e.parentElement.parentElement;
    userReq.del(data.attributes[1].value, data);
    location.reload();
  },
  done: function (e) {
    let val = e.parentElement.parentElement.attributes[1].value;
    e.parentElement.parentElement.classList.toggle('itm_done')
    if (localStorage.getItem(`user${val}`)) {
      localStorage.removeItem(`user${val}`)
    } else { localStorage.setItem(`user${val}`, true) }
  },
  modelBox_Opn: function (e) {
    globalThis.mdlBox = document.getElementById('mdl_bx');
    this.navCls()
    mdlBox.style.display = 'block';
    document.getElementById('mainContent').style.opacity = '.3'
    globalThis.mdlBox; this.Anim(mdlBox, 'animate__backInDown', true)
    if (mdlOpn) { modelData(e) }
  },
  modelBox_Cls: function () {
    document.getElementById('mainContent').style.opacity = '1'
    this.Anim(mdlBox, 'animate__bounceOutUp', false);
    mdlOpn = true; setTimeout(() => {
      mdlBox.style.display = 'none';
      this.Anim(mdlBox, 'animate__bounceOutUp', 'rm');
      document.getElementById('mdl_bx').children[0].innerHTML = ''
    }, 700);
  },
  flashMsg: function (msg) {
  let msgBody = document.getElementById('flashMsg')
  msgBody.style.display = 'block'; msgBody.children[0].innerHTML = `${msg}`;
  this.Anim(msgBody, 'animate__backInDown', true)
  setTimeout(() => {
    this.Anim(msgBody, 'animate__backOutUp', false)
    setTimeout(() => { msgBody.style.display = 'none'; this.Anim(msgBody, 'animate__backInDown', 'rm'); this.Anim(msgBody, 'animate__backOutUp', 'rm') }, 2000);
  }, 3000);
  },
  Anim: function (obj, animType, dpOpt) {
  if (dpOpt == true) {
    obj.classList.add('animate__animated'); obj.classList.add(animType);
  } else if (dpOpt === 'rm') { obj.classList.remove(animType) } else { obj.classList.add(animType) }
  },
  navOpn:function(){
  globalThis.navCtn=document.getElementById('NavCtn')
  navCtn.children[0].style.display='block';
  this.Anim(navCtn.children[0], 'animate__fadeInDownBig', true)
  document.getElementById('mainContent').style.opacity = '.3'
  },
  navCls:function(){
    navCtn=document.getElementById('NavCtn')
    if(navCtn.children[0].style.display=='block'){
  this.Anim(navCtn.children[0], 'animate__fadeInDownBig', 'rm')
  this.Anim(navCtn.children[0], 'animate__fadeOutUpBig', true)
  setTimeout(() => {
    navCtn.children[0].style.display='none'
    this.Anim(navCtn.children[0], 'animate__fadeOutUpBig', 'rm')
  }, 1000);
  document.getElementById('mainContent').style.opacity = '1'}}}

// ReqHandler Data  
let ReqURI = { AddPs: location.origin + '/apiV3/crt', GetA_ps: location.origin + '/apiV3/fnO/', upd: { MaxApply: location.origin + '/apiV3/upd?maxAp=', AutoApv: location.origin + '/apiV3/upd?autoAp=', ClsOpn: location.origin + '/apiV3/upd?fState=' }, dtBD_: location.origin + '/apiV3/get?dt=', del: location.origin + '/apiV3/del/', updApvl: location.origin + '/apiV3/updApvl' }
// User Requestes To API
console.log(ReqURI.dtBD_);
let ReqHandler = {
  GET: async function (url) {
    console.log(url)
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    });
    return response.json();
  },
  POST: async function (url, data) {
    console.log(data);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: JSON.stringify(data)
    });
    return response.json();
  }, PUT: async function (url, data) {
    console.log(url);
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: data
    });
    return response.json();
  }, DEL: async function (url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    });
    return response.json();
  }
}
const userReq = {
  AddPs: function (e) {
    let val = document.getElementsByClassName('addPS')[0].children[1].children;
    let ap_date = dSplit(val[9].value, '-', true)
    let data = { name: val[1].value, number: val[3].value, OthInfo: val[5].value, doctor: val[7].value, date: ap_date }
    ReqHandler.POST(ReqURI.AddPs, data).then((data) => {
     userAction.flashMsg(data.msg); Cls_addPS(e); location.reload()
    })
  },
  MaxApply: function () {
    let val = document.getElementById('mdl_body').children[1].value;
    ReqHandler.PUT(ReqURI.upd.MaxApply + val, '').then((data) => {
    userAction.modelBox_Cls(); userAction.flashMsg(data.msg);
    })
  },
  AutoApv: function () {
    let val = document.getElementById('mdl_body').children[1].value;
    ReqHandler.PUT(ReqURI.upd.AutoApv + val, '').then((data) => {
      userAction.modelBox_Cls(); userAction.flashMsg(data.msg);
    })
  },
  ClsOpn: function () {
    let val = document.getElementById('mdl_body').children[1].value;
    ReqHandler.PUT(ReqURI.upd.ClsOpn + val, '').then((data) => {
      userAction.modelBox_Cls(); userAction.flashMsg(data.msg);
    })
  }, dtBD_: function (e) {
    let val = dSplit(e.value, '-', true); ReqHandler.GET(ReqURI.dtBD_ + val).then((data) => {///////////////////////////////
      ; userAction.flashMsg(data.msg);
      userAction.panel_Exp(data);userAction.modelBox_Cls()
    })
  },
  downldsheet: async function (e) {
    let val = dSplit(document.getElementById("reqDate").value, '-', true);
    ReqHandler.GET(ReqURI.dtBD_ + val).then((data) => {
      let reqData = data.data;
      let headers = Object.keys(reqData[0]);
      headers.splice(4, 1)
      let mainheaders = ["Patient Name", "informantion",  "Doctor", "Appointment Date", "Id Number", "Ph. Number"].join(',');
      let patdata = reqData.map((el) => {
        return headers.map((key) => el[key]);
      })
    let AllData = `${mainheaders}\n${patdata.join('\n')}`;
    const blob = new Blob([AllData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'pateintData.csv');
    a.click()})},
  del: function (e) {
    ReqHandler.DEL(ReqURI.del + e).then((data) => {
      userAction.flashMsg(data.msg); s.remove()
    })
  },
  Acpt: function (e) {
    let val = e.parentElement.parentElement.attributes[1].value;
    ReqHandler.PUT(ReqURI.updApvl + '?Acpt=' + val, '').then((data) => {
      userAction.flashMsg(data.msg)
      e.parentElement.parentElement.remove();
    })
  }, rejt: function (e) {
    let val = e.parentElement.parentElement.attributes[1].value
    ReqHandler.DEL(ReqURI.updApvl + '?Rejt=' + val).then((data) => {
      userAction.flashMsg(data.msg)
      e.parentElement.parentElement.remove();
    })
  },
}
var addPS = document.getElementsByClassName('addPS')[0];
function Opn_addPS(e) { e.parentElement.classList.toggle('addPSpan');document.getElementById('mainContent').style.opacity = '.3' }
function Cls_addPS(e) {
  e.parentElement.parentElement.classList.remove('addPSpan');document.getElementById('mainContent').style.opacity = '1'
  setTimeout(() => {userAction.Anim(e.parentElement.parentElement,'animate__bounceOut',false)},.5);
}
var _0x2c1a19 = _0x13e9; function _0x13e9(_0xa1444, _0xea74e8) { var _0x224885 = _0x2248(); return _0x13e9 = function (_0x13e981, _0x51af28) { _0x13e981 = _0x13e981 - 0x7c; var _0x4223b1 = _0x224885[_0x13e981]; return _0x4223b1; }, _0x13e9(_0xa1444, _0xea74e8); } function _0x2248() { var _0x4adf47 = ['<select\x20name=\x22autoReq\x22><option\x20value=\x22true\x22\x20selected>On</option><option\x20value=\x22false\x22>Off</option></select>', '5332968TBNtUP', '<input\x20type=\x22number\x22\x20name=\x22maxApl\x22\x20placeholder=\x224,7,9,20,\x20etc.\x22>', '10oUWmZR', '1377368LJDBsa', 'userReq.AutoApv()', 'userReq.ClsOpn()', '4144376Ruswbc', '3347183ncCYWQ', '<p>Auto\x20Request(On/Off\x20auto\x20Approval)</p>', '3169052unYCCo', '9xZXlaI', '<select\x20name=\x22formStatus\x22><option\x20value=\x22true\x22\x20selected>On</option><option\x20value=\x22false\x22>Off</option></select>', '1098626XMFrka', '2895726JzDNak', '<p>Enter\x20here\x20Max\x20Request(Number\x20of\x20Per\x20day\x20Apply)</p>']; _0x2248 = function () { return _0x4adf47; }; return _0x2248(); } (function (_0x4c0dde, _0x1d0c90) { var _0x267a7 = _0x13e9, _0x3af70b = _0x4c0dde(); while (!![]) { try { var _0x5384e0 = -parseInt(_0x267a7(0x81)) / 0x1 + parseInt(_0x267a7(0x8a)) / 0x2 + parseInt(_0x267a7(0x8b)) / 0x3 + -parseInt(_0x267a7(0x87)) / 0x4 * (-parseInt(_0x267a7(0x80)) / 0x5) + -parseInt(_0x267a7(0x7e)) / 0x6 + -parseInt(_0x267a7(0x85)) / 0x7 + parseInt(_0x267a7(0x84)) / 0x8 * (parseInt(_0x267a7(0x88)) / 0x9); if (_0x5384e0 === _0x1d0c90) break; else _0x3af70b['push'](_0x3af70b['shift']()); } catch (_0x3031cf) { _0x3af70b['push'](_0x3af70b['shift']()); } } }(_0x2248, 0xd513b)); var inputObjects = { 'MaxChange': { 'title': _0x2c1a19(0x7c), 'input': _0x2c1a19(0x7f), 'saveFn': 'userReq.MaxApply()' }, 'AutoApv': { 'title': _0x2c1a19(0x86), 'input': _0x2c1a19(0x7d), 'saveFn': _0x2c1a19(0x82) }, 'ClsOpn': { 'title': '<p>Close/Open\x20site\x20Apply\x20Form</p>', 'input': _0x2c1a19(0x89), 'saveFn': _0x2c1a19(0x83) } };
function modelData(e) {
  let doc = mdlBox.children[0];
  doc.innerHTML += inputObjects[e].title; doc.innerHTML += inputObjects[e].input;
  mdlBox.children[1].children[0].setAttribute('onclick', `${inputObjects[e].saveFn}`); return mdlOpn = false
}
function dSplit(val,p,t) { let [d,m,y]=val.split(p);return t?`${y}/${m}/${d}`:`${y}-${m}-${d}` }
function dateFn(e) {
  let dtEm = document.getElementById(e); let tdy = new Date; if (dtEm) {
    let tdyVal = tdy.toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" })
    let odt = new Date(tdy.setDate(tdy.getDate() - parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" });
    let ndt = new Date(tdy.setDate(tdy.getDate() + parseInt(dtEm.dataset.max) + parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" })
    dtEm.value = dSplit(tdyVal, '/', false); dtEm.min = dSplit(odt, '/', false); dtEm.max = dSplit(ndt, '/', false);
  }
}
dateFn('reqDate-n0');dateFn('reqDate');dateFn('formDate');
function dn_ck() {
  let e = document.getElementsByClassName('psInfo')
  for (let i = 0; i < e.length; i++) {
    let val = localStorage.getItem(`user${e[i].attributes[1].value}`)
    if (val) { e[i].classList.add('itm_done') } }}
dn_ck()


function filter_fun(SearchValueId, AllDataClassName) {
  let data = document.getElementById(SearchValueId).value;
  let allData = document.querySelectorAll(`.${AllDataClassName}`);
  allData.forEach(function (ata) {
    if (ata.innerHTML.search(data) > -1) {
      ata.parentElement.parentElement.style.display = '';
    } else {
      ata.parentElement.parentElement.style.display = 'none';
    }
  })
  return;
}
