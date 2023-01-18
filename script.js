function btnclick(val){
    document.getElementById('screen').value+=val
}
function clr(){
    document.getElementById('screen').value=""
}
function eqlclick(){
    var txt=document.getElementById('screen').value
    var res=eval(txt)
    document.getElementById('screen').value=res
}