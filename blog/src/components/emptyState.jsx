import React from 'react';

const EmptyState = () => {
  const luffyVacation = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGV4ZG01OHd4Y2o4d2s2eGZzd2NlM293ZmRyamlqNGtnbTk5M2tzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SEaKNxJgOfU76/giphy.gif'; // Importa tu gif personalizado aquí

  return (
    <div className="empty-state" style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)', maxWidth: '500px', margin: '0 auto' }}>
      <img src={luffyVacation} alt="Luffy está de vacaciones" style={{ width: '100%', maxWidth: '300px', marginBottom: '2rem', borderRadius: '0.5rem' }} />
      <h3 style={{ marginBottom: '1rem', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>¡Luffy está de vacaciones!</h3>
      <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center' }}>
        Parece que la tripulación del Sombrero de Paja está tomando un descanso. ¡No hay nuevos personajes para mostrar por ahora! Pero no te preocupes, ¡el mundo de One Piece siempre tiene aventuras esperándote! ¡Vuelve pronto para conocer más personajes emocionantes y nuevas historias!
      </p>
    </div>
  );
};

export default EmptyState;

