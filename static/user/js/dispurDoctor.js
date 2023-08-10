
let dname = document.getElementById('dname');
let dspec = document.getElementById('dspec');
let ddeg = document.getElementById('ddeg');
let dexp = document.getElementById('dexp');
let dlang = document.getElementById('dlang');
let drat = document.getElementById('drat');
let dasum = document.getElementById('aboutsum');
let dblog = document.getElementById('blog');  

const doctor1 = {did: 0, Name: 'Dr. Bhaba Jyoti Sharma', deg: 'BDS', specific : 'Dentist', exp: '12 Years Experience',
 Lang: ['Assamese', 'Hindi', 'English'], rating: "250+ Ratings", time: {sun: 12, mon: 14},  about : "Dr. Bhaba Jyoti Sharma is a highly experienced and skilled dentist with over 12 years of experience in the field of dentistry. He has served more than 1000+ patients and has helped them achieve their dental health goals.", blog: `Dr. Sharma uses the latest dental technology and techniques to provide his patients with the best possible care. He stays up-to-date with the latest advancements in dentistry by attending various continuing education courses and seminars. This allows him to provide his patients with the most effective and efficient dental treatments available.
 Dr. Sharma's commitment to providing his patients with exceptional dental care has earned him a reputation as one of the most trusted and reliable dentists in the community. Patients appreciate his compassionate approach and his ability to make even the most anxious patients feel at ease.`};

const doctor2 = {did: 1, Name: 'Dr R.N Kalita', deg: 'MBBS', specific : 'General Physician', exp: '5 Years Experience',
 Lang: ['Assamese', 'Hindi', 'English'], rating: "179+ Ratings", time: {sun: 12, mon: 14},  about : "Dr. R.N. Kalita is a highly skilled doctor with over five years of experience in the medical field. During his career, he has helped over 500 patients from all walks of life, providing them with the highest standard of care and support.", blog: `Over the years, Dr. Kalita has built a reputation as a compassionate and dedicated doctor who goes above and beyond to ensure his patients receive the care they need. He believes in taking a holistic approach to medicine and treating the patient as a whole, rather than just focusing on their symptoms.
 In addition to his clinical work, Dr. Kalita is also actively involved in research and education, keeping up to date with the latest medical developments and technologies. He is a regular speaker at medical conferences and has published several papers on his research.`};
 
let doctors = [doctor1, doctor2];

dname.innerHTML = doctors[0].Name;
dspec.innerHTML = doctors[0].specific;
ddeg.innerHTML = doctors[0].deg;
dexp.innerHTML = doctors[0].exp;
dlang.innerHTML = doctors[0].Lang;
drat.innerHTML = doctors[0].rating;
dasum.innerHTML = doctors[0].about
dblog.innerHTML = doctors[0].blog;


function getValu() {
    let a = document.getElementById('doctors');
    let v = Number(a.value);
    //console.log(typeof doctors[0].did)
for (let i = 0; i <= 1; i++) {
    if (v == doctors[i].did) {
        dname.innerHTML = doctors[i].Name;
        dspec.innerHTML = doctors[i].specific;
        ddeg.innerHTML = doctors[i].deg;
        dexp.innerHTML = doctors[i].exp;
        dlang.innerHTML = doctors[i].Lang;
        drat.innerHTML = doctors[i].rating;
        dasum.innerHTML = doctors[i].about
        dblog.innerHTML = doctors[i].blog;  
    }
  }    
}

let btn = document.getElementById('click')

//btn.addEventListener('click', getValu)


document.getElementById("bookAppo").addEventListener("click", function(){
    document.querySelector(".registration-form").style.display = "block";
    })

    document.getElementById("closeX").addEventListener("click",
    function(){
        document.querySelector(".registration-form").style. display = "none";
    })

