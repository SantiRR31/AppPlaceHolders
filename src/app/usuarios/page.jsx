import axios from "axios";
import Link from 'next/link';

async function getUsuarios() {
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
    
}
//noticias();

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    return(
        <>
            <h1>Lista de usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map((usuario, i)=>(
                        <tr key= {i} >
                        <td> {i+1} </td>
                        <td> <Link href={`/usuarios/${usuario.id}`}> {usuario.name} </Link> </td>
                        <td> {usuario.username} </td>
                        <td> {usuario.email} </td>
                    </tr>
                    ))}
                </tbody>
            </table>




            <p>Estas en la lista de Usuarios</p>
        </>
    );
}
