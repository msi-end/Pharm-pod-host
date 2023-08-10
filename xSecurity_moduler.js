// Cls17_10  ln 1-2
let path=(window.location.pathname).split('/');
let bottomNav =document.getElementById('bottomNav');
if(path.length==4){for (let i = 0; i < bottomNav.children.length; i++) { 
   bottomNav.children[i].removeAttribute('action');if(path[3]==bottomNav.children[i].dataset.n){
   bottomNav.children[i].setAttribute('action','')}}}



// Cls17_20 ln 50-51
var inputObjects = {
    MaxChange: {
        title: '<p>Enter here Max Request(Number of Per day Apply)</p>',
        input: '<input type="number" name="maxApl" placeholder="4,7,9,20, etc.">',
        saveFn: 'userReq.MaxApply()'
    },AutoApv: {
        title: '<p>Auto Request(On/Off auto Approval)</p>',
        input: '<select name="autoReq"><option value="true" selected>On</option><option value="false">Off</option></select>',
        saveFn: 'userReq.AutoApv()'
    }, ClsOpn: {
        title: '<p>Close/Open site Apply Form</p>',
        input: '<select name="formStatus"><option value="true" selected>On</option><option value="false">Off</option></select>',
        saveFn: 'userReq.ClsOpn()'
    }}


    // Cls17_30 ln not Yet Set 
    const userReq ={
        AddPs:function() {
            
        },
        MaxChange:function() {
    
        },
        AutoApv:function() {
            
        },
        FormSta:function() {
            
        },dtBD_:function() {
        dSplit(document.getElementById('reqDate'),value,'-',true)
        }}