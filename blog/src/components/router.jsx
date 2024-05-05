import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "../view/blog";
import Login from '../components/login';
import AdminBlog from "../view/adminBlog";
import CharacterID from "./characterID";
import CrearPersonaje from "./crearPersonaje";
import ActualizarPersonaje from "./actualizarPersonaje";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminBlog />} />
        <Route path="/character/:id" element={<CharacterID />} />
        <Route path="/admin/character/:id" element={<CharacterID />} />
        <Route path="/admin/crear-personaje" element={<CrearPersonaje />} />
        <Route path="/admin/character/:id/update" element={<ActualizarPersonaje />} />
        <Route path="*" element={<div><h1>Ruta no encontrada</h1></div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;