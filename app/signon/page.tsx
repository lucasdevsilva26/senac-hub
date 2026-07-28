import InputAndLabel from "@/components/InputAndLabel";
import { colorsPresets } from "@/components/LayoutColors";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center px-20 py-10 bg-neutral-100 font-sans text-black select-none">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className={`font-bold text-5xl ${colorsPresets.textDark}`}>
          Bem vindo(a)!
        </h1>
        <h2 className={`font-bold text-3xl ${colorsPresets.textGray}`}>
          È um prazer te conhecer
        </h2>
      </div>

      <form
        action=""
        className={`flex flex-col items-center justify-evenly w-120 aspect-3/4 bg-neutral-200 border-4 rounded-2xl ${colorsPresets.mainBorder}`}
      >
        <h1 className="text-4xl font-bold">Registrar conta</h1>

        <section className="flex flex-col gap-6 w-7/9">
          <InputAndLabel
            LabelName="E-mail"
            InputPlaceholder="Ex: email@gmail.com"
            InputType="email"
            ToggleView={false}
          />

          <InputAndLabel
            LabelName="Senha"
            InputPlaceholder="Digite uma senha forte"
            InputType="text"
            ToggleView
          />

          <InputAndLabel
            LabelName="Confirmar Senha"
            InputPlaceholder="Confirme sua senha"
            InputType="text"
            ToggleView
          />
        </section>

        <div className="flex flex-col items-center gap-2">
          <button
            className={`w-11/10 py-2 text-2xl font-bold rounded-full ${colorsPresets.bg0} ${colorsPresets.textGray}`}
          >
            Registrar-se
          </button>

          <Link
            href={"login"}
            className={`${colorsPresets.textLink} font-bold`}
          >
            Já possui uma conta? Clique aqui.
          </Link>
        </div>
      </form>
    </div>
  );
}
