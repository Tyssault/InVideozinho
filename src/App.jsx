import React from 'react';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Bem-vindo ao InVideozinho</h1>
        <p className="text-lg md:text-2xl mb-6">Seu estúdio automático de criação de vídeos com IA</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Criar Vídeo
        </button>
      </div>
    </div>
  );
}
