export const Card = ({ title, description, imageUrl,texto }) => {
    return (
      <div className="bg-gray p-4 flex gap-4 items-center justify-center">
        <div className="mr-4 pt-9">
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-red-500">{texto}</h2>
          <h3 className="text-3xl">{title}</h3>
          <p>Oferecemos uma ampla gama de valores de<br/> empréstimo para atender às suas<br/> necessidades específicas de financiamento.{description}</p>
        </div>
      </div>
    );
  };
  
  export function Paragrafo(){
    return(
      <>
      <h2 className="flex justify-center text-4xl font-bold text-red-500">Porque Escolher <br/>a BDQ Microcrédito?</h2>
      </>
    )
  }
  
  const App = () => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center justify-center">
        <Paragrafo
        />
  
        <Card
          title="Flexibilidade de Montante:"
          imageUrl="/img/Rectangle 79.png"
        />
        <Card
          title="Acesso Simplificado:"
          imageUrl="/img/Rectangle 79.png"
        />
        <Card
          title="Taxas Competitivas:"
          imageUrl="/img/Rectangle 79.png"
        />
      </div>
    );
  };
  
  export default App;
  
  
      
    export function Questions(){
    return(<div className="pt-10 m-5 flex justify-center">
    <div>
      <h2 className="m-5 font-bold text-2xl">Perguntas frequentes</h2>
      
      <p className="m-5">Quem pode solicitar um crédito?</p>
      <hr/>
      <p className="m-5">Quais são os requisitos para obter um crédito?</p>
      <hr/>
      <p className="m-5">Quais são as taxas de juros?</p>
      <hr/>
      <p className="m-5">Quanto tempo leva para aprovar um crédito?</p>
      <hr/>
    </div>
  </div>)}
  