const createEvent = async (data) => {
  return fetch('https://soundgarden-api.vercel.app/events',{
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.body;
});
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
    scheduled: `${form.data.value}:00.000Z`,
    number_tickets: form.lotacao.value,
  };

 
  try {
    const response = await createEvent(eventToCreate);
  
    console.log(response)
    alert("Evento criado com sucesso")
    setTimeout(function() {
      window.location.replace("admin.html");
    }, 500);
   
  } catch (error) {
    alert("error: "+ error.data +"\nErro ao criar evento. Tente Novamente")
   
  }
});

