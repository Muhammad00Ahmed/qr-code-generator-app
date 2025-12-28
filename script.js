function generateQR() {
  const input = document.getElementById('qr-input').value;
  const size = document.getElementById('size').value;
  const color = document.getElementById('color').value;
  const qrContainer = document.getElementById('qr-code');
  const downloadBtn = document.getElementById('download');
  
  if (!input) {
    alert('Please enter text or URL');
    return;
  }
  
  // Clear previous QR code
  qrContainer.innerHTML = '';
  
  // Generate new QR code
  const qrcode = new QRCode(qrContainer, {
    text: input,
    width: parseInt(size),
    height: parseInt(size),
    colorDark: color,
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Show download button
  downloadBtn.style.display = 'block';
  
  // Setup download functionality
  downloadBtn.onclick = function() {
    const canvas = qrContainer.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
  };
}

// Generate on Enter key
document.getElementById('qr-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    generateQR();
  }
});