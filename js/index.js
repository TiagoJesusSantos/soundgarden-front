var myImage = document.querySelector('#imagem-principal');

fetch('https://www.istockphoto.com/br/foto/aplaudindo-multid%C3%A3o-de-pessoas-n%C3%A3o-reconhecidas-em-um-concerto-de-m%C3%BAsica-rock-gm1189205501-336642195')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

const lastThreeEvents = async () => {
  const lastEventsTable = document.querySelector("[data-last-events-table]")
 

  return fetch('https://soundgarden-api.vercel.app/events').then(
      (response) => {
          if (response.ok) {                 
              return response.json();
          }  
          throw new Error("nao foi possivel listar os eventos");      
      }
  ).then((data) => {
      const lastThreeData = data.slice(0, 3);
      
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };

      lastEventsTable.innerHTML = lastThreeData.map((element) =>{
          return `<article class="evento card p-5 m-3" style="min-height: 396px;justify-content: space-between">
              <h2>${element.name} - ${new Date(element.scheduled).toLocaleDateString('pt-BR', options)}</h2>
              <h4>${element.attractions.join(", ")}</h4>
              <p>${element.description}</p>
              <a href="?id=${element._id}" class="btn btn-primary btn-modal modal-btn">reservar ingresso</a>
          </article>`     
          
      }).join('')
      
     
  })
}
lastThreeEvents();