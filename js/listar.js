const eventList = async () => { 
    return fetch('https://soundgarden-api.vercel.app//events').then(
        (response) => {
            if (response.ok) { 
                console.log(response.json())
                return response.json();
            }  
            throw new Error("nao foi possivel listar os eventos");      
        }
    )
}
eventList();