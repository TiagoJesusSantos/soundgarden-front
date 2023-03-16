var myImage = document.querySelector('#imagem-principal');

fetch('https://www.istockphoto.com/br/foto/aplaudindo-multid%C3%A3o-de-pessoas-n%C3%A3o-reconhecidas-em-um-concerto-de-m%C3%BAsica-rock-gm1189205501-336642195')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
  console.log(objectURL)
});
