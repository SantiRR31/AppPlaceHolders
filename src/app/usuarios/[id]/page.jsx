
import axios from 'axios';

async function getUsuarios(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

export default async function DetallesUsuario({ params }) {
    const usuario = await getUsuarios(params.id);

    return (
        <>
            <h1>Detalles del Usuario</h1>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ID:</strong></td>
                        <td>{usuario.id}</td>
                    </tr>
                    <tr>
                        <td><strong>Nombre:</strong></td>
                        <td>{usuario.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Username:</strong></td>
                        <td>{usuario.username}</td>
                    </tr>
                    <tr>
                        <td><strong>E-mail:</strong></td>
                        <td>{usuario.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Teléfono:</strong></td>
                        <td>{usuario.phone}</td>
                    </tr>
                    <tr>
                        <td><strong>Sitio Web:</strong></td>
                        <td>{usuario.website}</td>
                    </tr>
                    <tr>
                        <td><strong>Compañía:</strong></td>
                        <td>{usuario.company.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Dirección:</strong></td>
                        <td>{`${usuario.address.street}, ${usuario.address.city}`}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}