// //inport {createEvent} form "./crud.js";

// const form = document.querySelector("form");

// form.addEventListener("submit",async (e) => {
// e.preventDefault();


// const eventToCreate = {

//     name: form.nome.value,
//     poster:"",
//     attractions: form.atracoes.value,
//     description: form.descricao.value,
//     scheduled: form.data.value,
//     number_tickets: form.lotacao.value,

// };

// const response = await createEvent ( eventToCreate);

// if (response.status == 201){
//     //levar o ussuario para outra pagina.
// }
// });


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
