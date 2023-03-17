import { eventLoad } from './carregar-evento.js'

const params = new URL(document.location).searchParams;
const idEvent = params.get("id");

const screenDataLoad = async () => {

    const data = await eventLoad(idEvent)
    
    document.getElementById("nome").value = data.name;
    document.getElementById("banner").value = data.poster;
    document.getElementById("atracoes").value = data.attractions;
    document.getElementById("descricao").value = data.description;
    document.getElementById("data").value = data.scheduled;
    document.getElementById("lotacao").value = data.number_tickets;
}
screenDataLoad()

const removeEvent = async () => {
    fetch(`https://soundgarden-api.vercel.app/events/${idEvent}`, {
        method: 'DELETE',  
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },         
    }).then((resposta) => resposta);
    
};

const form = document.querySelector("form");

form.addEventListener("submit",async (e) => {
    e.preventDefault();

    try {
        await removeEvent();

        alert("Evento excluido")
        window.location.replace("admin.html");
       
    } catch (error) {
        alert("error: "+ error.data +"\nNão foi possível deletar o evento")
    
    }
});