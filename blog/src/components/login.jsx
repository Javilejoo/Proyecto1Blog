import Button from '@mui/material/Button';
function Login() {
  const user = "admin";
  const password = "admin";

  return (
    <div>
      <h1> Login</h1>
      <form>
        <input type="text" placeholder="Usuario"></input>
        <input type="password" placeholder="Contraseña"></input>
        <Button variant="contained" href="/admin" color="primary">Iniciar sesión</Button>
      </form>
    </div>
  );
}

export default Login;