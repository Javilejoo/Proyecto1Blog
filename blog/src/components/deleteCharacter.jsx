import React from 'react';
import useApi from './useApi'; // Importa el hook useApi

function DeleteCharacter({ id, handleDelete }) {
    const { deleteData } = useApi(); // Usa el hook useApi

    const deleteCharacter = async () => {
        try {
            await deleteData(`https://onepieceblog-13817415a776.herokuapp.com/posts/${id}`);
            handleDelete(); // Llama a la función de manejo después de la eliminación
        } catch (error) {
            console.error('Error deleting character:', error);
        }
    };

    return (
        <button onClick={deleteCharacter}>Delete</button>
    );
}

export default DeleteCharacter;
