import Permitido from '../components/permitido';

interface RenderPermitidosProps {
    lsItems: Item[];
  }

  interface Item {
    id: number;
    texto: string;
    finalizada: boolean;
  }
  
  const RenderPermitidos: React.FC<RenderPermitidosProps> = ({ lsItems }) => {
    return (
      <>
        {lsItems.map( (i:Item) => (
          <Permitido key={i.id} id={i.id} finalizada={i.finalizada}>{i.texto}</Permitido>
        ))}
      </>
    );
  };

  export default RenderPermitidos;