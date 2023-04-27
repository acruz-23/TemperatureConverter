
window.onload = init;


function init() {
    console.log("init working")
    const c2fBtnEl = document.getElementById("convertC");
    c2fBtnEl.onclick = onc2fBtnClicked;
    const resetCEl = document.getElementById("resetC");
    resetCEl.onclick = oncresetCClicked;
}

function onc2fBtnClicked(){
    console.log('c2f working')
    const tempC = Number(document.getElementById("celciusTemp").value)
    const temp2F = (tempC * 9 / 5) + 32;
    document.getElementById("c2fAns").value = temp2F;
}

function oncresetCClicked(){
    document.getElementById("celciusTemp").value = 0;
    document.getElementById("c2fAns").value = '';
}