function DeleteCharacter({ id }) {
  const [deleteCharacter] = useMutation(DELETE_CHARACTER, {
    variables: { id },
    refetchQueries: [{ query: GET_CHARACTERS }],
  });

  return (
    <button onClick={deleteCharacter}>Delete</button>
  );
}