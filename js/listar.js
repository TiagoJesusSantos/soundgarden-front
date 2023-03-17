const formatDateHourMinute = (date) => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };

    return newDate.toLocaleDateString('pt-BR', options);
};

const eventList = async () => { 
    const eventsTable = document.querySelector("[data-events-table]")
   
 
    return fetch('https://soundgarden-api.vercel.app/events').then(
        (response) => {
            if (response.ok) {                 
                return response.json();
            }  
            throw new Error("nao foi possivel listar os eventos");      
        }
    ).then((data) => {
       
        
        eventsTable.innerHTML = data.map((element,index) =>{
            return `<tr>
            <th scope="row">${index+1}</th>
            <td>${formatDateHourMinute(element.scheduled)}</td>
            <td>${element.name}</td>
            <td>${element.attractions.join(", ")}</td>
            <td>
                <a href="reservas-evento.html?id=${element._id}" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${element._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${element._id}" class="btn btn-danger">excluir</a>
            </td>
            </tr>`        
            
        }).join('')
        
       
    })
}
eventList();
