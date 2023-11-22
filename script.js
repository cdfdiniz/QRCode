function gerarQRCode() {

    let botao = document.querySelector ('#qrBtn');
        
        botao.addEventListener("click", () => {
            
            let qrInput = document.getElementById ('qrInput').value.trim();
            let qrImg = document.getElementById('qrImg');
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrInput}`;
           

    })
};