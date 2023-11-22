function gerarQRCode() {
    let botao = document.querySelector ('#qrBtn');
        
        qrBtn.addEventListener("click", () => {
            
            let qrTexto = document.getElementById ("texto").value.trim();
            let qrcode = document.getElementById("qrcode");
            qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrTexto}`;
           

    })
};
    
    
    
    
    
