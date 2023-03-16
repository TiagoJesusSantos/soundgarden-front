var myImage = document.querySelector('#imagem-principal');

fetch('https://img.freepik.com/fotos-gratis/publico-animado-assistindo-fogos-de-artificio-de-confete-e-se-divertindo-no-festival-de-musica-a-noite-copiar-espaco_637285-559.jpg?w=740&t=st=1678932868~exp=1678933468~hmac=43b81f4a0c07ef7e4a9bc5e273398bf29757318b6d4f5b52e645e1b5622e6d04')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
  console.log(objectURL)
});
