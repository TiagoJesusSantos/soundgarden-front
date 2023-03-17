import { eventListById}  from "./listar-id.js";

const params = new URL(document.location).searchParams;
const idEvent = params.get("id");

const eventLoad = async () => {

    const data =   await eventListById(idEvent)
     console.log(data)
    document.getElementById("nome").value = data.name;
    document.getElementById("banner").value = data.poster;
    document.getElementById("atracoes").value = data.attractions;
    document.getElementById("descricao").value = data.description;
    document.getElementById("data").value = data.scheduled;
    document.getElementById("lotacao").value = data.number_tickets;
}
eventLoad()

export const removeEvent = async (data) => { 
    const form = document.querySelector("form");
        
    form.addEventListener("submit",async (e) => {
        e.preventDefault();

      return fetch(`https://soundgarden-api.vercel.app/events/${idEvent}`, {
            method: 'DELETE',  
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },         
        }).then((resposta) => {
            console.log(resposta)
            if (!resposta.noContent) {
                throw new Error('Não foi possível deletar o evento');
            } 
            alert(" evento excluido ")

            window.location.replace('admin.html')
        });
    })
};