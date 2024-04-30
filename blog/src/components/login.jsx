import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.username === 'admin' && data.password === 'admin') {
      // Si el usuario y la contraseña son "admin", navegar al admin
      window.location.href = '/admin';
    } else {
      // Si no, mostrar un mensaje de error
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Usuario" {...register('username')} />
        <input type="password" placeholder="Contraseña" {...register('password')} />
        <Button type="submit" variant="contained" color="primary">Iniciar sesión</Button>
      </form>
    </div>
  );
}

export default Login;
