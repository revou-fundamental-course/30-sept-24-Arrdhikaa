
function validateform() {
    const inputsuhu = document.getElementById("input-suhu").value;

    if (inputsuhu == '') {
        alert("input anda kosong");
    } else{
        calculate(inputsuhu);
    }
}

function calculate(value) {
    let result = parseInt(value) * 9/5 + 32;
    document.getElementById("hasil-suhu").value = result;
    document.getElementById("how-to-suhu").value = value + '* 9/5 + 32 = '+ result ;
}

function reset(){
    document.getElementById("input-suhu").value = "";
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("how-to-suhu").value = "";
}

function reverse() {
    
}