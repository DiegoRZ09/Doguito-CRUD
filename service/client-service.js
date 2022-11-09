//Fetch API
//Si la funcion solo retorna un valor podemos omitir las llaves
const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const crearCliente = (nombre,email) => {
    //El fetch por defecto trabajo con el metodo GET, por eso lo definimos aqui nosotros
    return fetch("http://localhost:3000/perfil",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, email, id: uuid.v4()}) //HTTP trabaja con texto
    })
}

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",
    })

}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, email})
    }).then(respuesta => respuesta).catch((err) => console.log(err));
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};





