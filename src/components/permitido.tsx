import { MyContext } from '@/app/Context';
import React, { useContext, useState } from 'react';

interface PermitidoProps {
  children: string;
  id: number;
  finalizada: boolean;
}

interface Item {
  id: number;
  texto: string;
  finalizada: boolean;
}

const Permitido: React.FC<PermitidoProps> = ({ id, finalizada, children }) => {
  const [isChecked, setIsChecked] = useState(finalizada);
  const { lsItems, setLsItems } = useContext(MyContext)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);

    // Actualizar el estado del item
    const updatedItems = lsItems.map((item:Item) => {
      if (item.id === id) {
        return { ...item, finalizada: checked };
      }
      return item;
    });

    // Establecer el nuevo estado de lsItems
    setLsItems(updatedItems);
  };

  return (
    <label className="flex w-full h-10 my-5 gap-5 px-5 border-b-2 border-gray-400 text-center">
      <input
        type="checkbox"
        className="w-8 h-5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="h-8 text-center">{children}</span>
    </label>
  );
};

export default Permitido;
