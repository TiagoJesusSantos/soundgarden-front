//inport {createEvent} form "./crud.js";
const createEvent = (data) => {
  return fetch('https://soundgarden-api.vercel.app//events',{
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data)
  })
}

const form = document.querySelector("form");

form.addEventListener("submit",async (e) => {
  e.preventDefault();

  const attractionsValues = form.atracoes.value.split(',');

  const eventToCreate = {
    name: form.nome.value,
    poster:"url-img",
    attractions: attractionsValues,
    description: form.descricao.value,
    scheduled: form.data.value,
    number_tickets: form.lotacao.value,
  };

 
  try {
    const response = await createEvent(eventToCreate);
  
    if (response.status == 201){
      alert("Evento criado com sucesso")
      setTimeout(function() {
        window.location.replace("admin.html");
      }, 2000);
    }    
  } catch (error) {
    alert("error: "+ error.data +"\nErro ao criar evento. Tente Novamente")
   
  }
});

