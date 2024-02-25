'use client'
import React from 'react';
import MyContextProvider from '@/app/Context';
import Home from './home';

interface PageProps {
  lsItems: Item[]
  // Define los tipos de las props de Home
}

interface Item {
  id: number;
  texto: string;
  finalizada: boolean;
}

const Page: React.FC<PageProps> = () => {
  
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
}

export default Page; // Exporta Home como el componente por defecto
