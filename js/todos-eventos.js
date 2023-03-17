const allEvents = async () => { 
    const allEventsTable = document.querySelector("[data-all-events-table]")
   
  
    return fetch('https://soundgarden-api.vercel.app/events').then(
        (response) => {
            if (response.ok) {                 
                return response.json();
            }  
            throw new Error("nao foi possivel listar os eventos");      
        }
    ).then((data) => {        
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        };
  
        allEventsTable.innerHTML = data.map((element) =>{
            return `<article class="evento card p-5 m-3" style="min-height: 396px;justify-content: space-between">
                <h2>${element.name} - ${new Date(element.scheduled).toLocaleDateString('pt-BR', options)}</h2>
                <h4>${element.attractions.join(", ")}</h4>
                <p>${element.description}</p>
                <a href="?id=${element._id}" class="btn btn-primary">reservar ingresso</a>
            </article>`     
            
        }).join('')
        
       
    })
}
allEvents();