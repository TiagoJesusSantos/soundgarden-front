export const eventListById = async (id) => {
    return fetch(`https://soundgarden-api.vercel.app/events/${id}`).then(
        (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Não foi possível lista o evento selecionado');
    }).then((data) => {
       
        return data
    });
};