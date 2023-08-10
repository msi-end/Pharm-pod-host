
function filter_fun(SearchValueId, AllDataClassName) {
    let data = document.getElementById(SearchValueId).value.toUpperCase();
    let allData = document.querySelectorAll(`.${AllDataClassName}`);
    allData.forEach(function (ata) {
     if (ata.innerHTML.toUpperCase().search(data) > -1) {
       ata.parentElement.parentElement.parentElement.style.display = '';
     }else{
      ata.parentElement.parentElement.parentElement.style.display = 'none';
     }
    })
    return;
  }

  document.querySelector('#closeSearchValue').addEventListener('click', function(){
    document.getElementById('searchBOX').value = '';
    document.querySelectorAll('.u-u-u-u-u').forEach(function(value){
        value.style.display = '';
    })
  })
  