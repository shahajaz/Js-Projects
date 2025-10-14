const qrText = document.getElementById("qr-input");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.querySelector("downloadBtn");
const qrBody = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR code");
}

function generateQRCode(){
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: qrText.value,
        width: sizes.value,
        height: sizes.value,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}