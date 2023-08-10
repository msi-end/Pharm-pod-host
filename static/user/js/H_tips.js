
// ad close header
document.getElementById("ad-header-close").addEventListener("click", function(){
    document.querySelector(".ad-header").style.display = "none";
})

//Article read more
const parentContainer = document.querySelector('.readArticle');

parentContainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadmoreBtn = current.className.includes('read-more-btn');

    if(!isReadmoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.readMore-text');

    currentText.classList.toggle('readMore-text--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less...." : "Read More....";

    
})