import BannerBook from "@/components/BannerBook";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-20 bg-neutral-100 font-sans text-black">
      <section className="flex flex-col items-center justify-center flex-2 gap-2">
        <BannerBook/>
      </section>

      <section className="flex flex-col items-center justify-between flex-1 gap-24">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold">Bem vindo(a)!</h1>

          <h2 className="w-70 text-4xl font-bold text-neutral-400">
            Venha conhecer nossos projetos
          </h2>
        </div>

        <div className="flex flex-col items-center  gap-4 w-full">
          <button className="w-2/4 py-4 bg-orange-400 rounded-full text-white font-bold text-2xl">
            Entrar
          </button>

          <button className="w-2/4 py-4 bg-blue-800 rounded-full text-white font-bold text-2xl">
            Cadastrar-se
          </button>
        </div>
      </section>
    </div>
  );
}
