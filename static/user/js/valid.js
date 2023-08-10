// let today = new Date();
// let dd = today.getDate();
// let dd2 = today.getDate()+1;
// let mm = today.getMonth()+1; 
// let yyyy = today.getFullYear();
// if(dd<10) {dd='0'+dd;} 
// if(mm<10) {mm='0'+mm;} 
// let todayDate = yyyy+'-'+mm+'-'+dd;


// let tomo = new Date("Feb 28, 2023 01:15:00");

// tomo.setDate(tomo.getDate() + 1);


// document.getElementById('formDat').defaultValue = todayDate;
// document.getElementById('formDat').min = todayDate;


// console.log(tomo.toLocaleString());

async function getdata() {
    const get = await fetch('http://localhost:8000/apiV3/r/revv/min01');
    const json = await get.json();
    let headers = Object.keys(json[0]).join(',');
    let maindata = json.map((el)=>{
        return Object.keys(json[0]).map((key) => el[key]);})
    let AllData = `${headers}\n${maindata.join('\n')}`;
//download(AllData) ; 
}
const download = function (data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'pateintData.csv');
    a.click()
}