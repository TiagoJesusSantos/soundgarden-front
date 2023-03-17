const params = new URL(document.location).searchParams;
const idEvent = params.get("id");

const url = "https://soundgarden-api.vercel.app"

// Obtém todos os botões que acionam o modal
// const btnModals = document.querySelectorAll('modal-btn');
const btnsModal = document.querySelectorAll('modal-btn');

// Obtém o modal
const modal = document.getElementById('modal');

// Obtém o elemento <span> que fecha o modal
const close = document.getElementsByClassName('close')[0];


// Quando o usuário clicar no <span> (x), o modal é ocultado
close.onclick = function() {
    modal.style.display = "none";
    window.history.replaceState({}, document.title, document.location.pathname);
}

// Quando o usuário clicar em qualquer lugar fora do modal, o modal é ocultado
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.history.replaceState({}, document.title, document.location.pathname);
  }
}

const getEventId = async () => {
    const params = new URL(document.location).searchParams;
    return params.get("id");
}

async function reservarTicket(form){
  const cliente = {
      owner_name: form.nome.value,
      owner_email: form.email.value,
      number_tickets: 1,
      event_id: await getEventId()
  }

  const create = {
      method:"POST",
      body: JSON.stringify(cliente),
      headers:{
          "Content-Type": "application/json"
      }
  };

  const response = await fetch(`${url}/bookings`, create);

  return await response.json();

}

const form = document.querySelector("form.ticket-form");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    try {
        await reservarTicket(form)
    
        alert("Reserva criada com sucesso")
        window.location.replace(document.location.pathname);
       
    } catch (error) {
        alert("error: "+ error.data +"\nErro ao criar reserva. Tente Novamente")
    }
})

document.addEventListener("DOMContentLoaded", function() {
    if (idEvent) {
        modal.style.display = "block";
    }
});