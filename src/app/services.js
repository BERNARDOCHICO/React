import { Imagem2 } from './imagens';
import { Imagem3 } from './imagens';
function Serviços(){
    return (
        <div className="pt-10 flex flex-col items-center bg-white text-black ">
            <h2 className="pt-9 text-2xl md:text-3xl lg:text-3xl font-bold">Serviços</h2>
            <p className="pt-9 text-1xl md:text-1xl lg:text-1xl mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas <br /> quam nunc, tincidunt quis facilisis ut, faucibus eget </p>

            <div className="pt-9 flex items-center text-black font-bold justify-around">
                <div className="">
                    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center pt-12">
                        <div>
                            <input type="checkbox" id="checkbox1" name="checkbox1" className="mr-2" />
                            <label htmlFor="checkbox1">Website Builder</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox2" name="checkbox2" className="mr-2" />
                            <label htmlFor="checkbox2">Free Domain and SSL</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox3" name="checkbox3" className="mr-2" />
                            <label htmlFor="checkbox3">WP Acelerator</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox4" name="checkbox4" className="mr-2" />
                            <label htmlFor="checkbox4">Auto installer</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox5" name="checkbox5" className="mr-2" />
                            <label htmlFor="checkbox5">DDos and Malware</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox6" name="checkbox6" className="mr-2" />
                            <label htmlFor="checkbox6">24/7 Support</label>
                        </div>
                    </div>
                </div>

                <div className="mr-4">
                    <div className="mr-4 pt-12">
                        <Imagem2/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Serviços;

export function Article() {
  return (
    <div className="flex justify-center">
      <div className="m-5 max-w-xs rounded overflow-hidden shadow-lg mx-4 my-8 flex">
        <div className="m-5 col-span-1 px-6 py-4">
          <Imagem3/>
        </div>
      </div>
      <div className="m-5">
        <div className="m-5 col-span-1 px-6 py-4">
          <div className="m-5 font-bold text-xl mb-2 text-white">Desbloqueie o potencial do seu<br />negócio com nosso microcrédito<br />rápido e acessível</div>
        </div>
      </div>
    </div>
  );
}





