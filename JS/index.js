var myImage = document.querySelector('#imagem-principal');

fetch('https://s3-ap-southeast-1.amazonaws.com/tksproduction/bmtimages/pY3BnhPQYpTxasKfx.jpeg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
  console.log(objectURL)
});
