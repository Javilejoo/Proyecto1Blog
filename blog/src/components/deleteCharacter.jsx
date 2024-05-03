function DeleteCharacter({ id, handleDelete }) {
    const deleteCharacter = async () => {
        try {
            await fetch(`http://127.0.0.1:3010/posts/${id}`, {
                method: 'DELETE',
            });
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
