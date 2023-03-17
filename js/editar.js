import { eventLoad } from './carregar-evento.js'

const params = new URL(document.location).searchParams;
const idEvent = params.get("id");

const screenDataLoad = async () => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };

    const data = await eventLoad(idEvent)
    
    document.getElementById("nome").value = data.name;
    document.getElementById("banner").value = data.poster;
    document.getElementById("atracoes").value = data.attractions;
    document.getElementById("descricao").value = data.description;
    document.getElementById("data").value = new Date(data.scheduled).toLocaleDateString('pt-BR', options);
    document.getElementById("lotacao").value = data.number_tickets;
}
screenDataLoad()

const updateEvent = async (data) => {
    return fetch(`https://soundgarden-api.vercel.app/events/${idEvent}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.body;
    });
}

const formatDate = (data) => {
    const [date, time] = data.split(', ');
    const [day, month, year] = date.split('/');

    return `${year}-${month}-${day}T${time}:00.000Z`
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
        scheduled: formatDate(form.data.value),
        number_tickets: form.lotacao.value,
    };


    try {
        await updateEvent(eventToCreate);

        alert("Evento editado com sucesso")
        window.location.replace("admin.html");
        
    } catch (error) {
        alert("error: "+ error.data +"\nErro ao editar evento. Tente Novamente")
        
    }
});