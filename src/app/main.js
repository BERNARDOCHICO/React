import { Heroimg } from "./imagens";
const TextoSection = () => {
  return (
    <div className="pt-8">
      <div className="px-6 py-8">
        <div className="m-4 text-5xl font-bold text-white">Transforme seus sonhos<br />em realidade com nosso<br />Microcrédito!</div>
      </div>
    </div>
  );
};

export default TextoSection;

export const Hero = () => {
  return (
    <div className="pt-8 justify-end">
      <div className="px-6 py-4">
        <a href="#">
          <Heroimg/>
        </a>
      </div>
    </div>
  );
};


