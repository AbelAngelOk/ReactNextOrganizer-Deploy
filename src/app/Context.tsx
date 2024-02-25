'use client'
import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Definir el tipo para los items
interface Item {
  id: number;
  texto: string;
  finalizada: boolean;
}

// Definir el tipo para el objeto de contexto
interface MyContextType {
  lsItems: Item[];
  setLsItems: Dispatch<SetStateAction<Item[]>>;
}

// Crear un contexto con el tipo de valor definido
const MyContext = createContext<MyContextType | undefined>(undefined);

// Componente proveedor que proporciona valores para el contexto
const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [lsItems, setLsItems] = useState<Item[]>([
    { id: 1, texto: 'Tarea 1', finalizada: false },
    { id: 2, texto: 'Tarea 2', finalizada: false },
    { id: 3, texto: 'Tarea 3', finalizada: true }
  ]);

  return (
    <MyContext.Provider value={{ lsItems, setLsItems }}>
      {children}
    </MyContext.Provider>
  );
};

// Definir los tipos para el componente proveedor
type MyContextProviderProps = {
  children: ReactNode;
};

export default MyContextProvider;
export {MyContext};