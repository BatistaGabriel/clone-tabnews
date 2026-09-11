import { Banner } from "@primer/react";
import DefaultLayout from "interface/DefaultLayout";

export default function ConfirmRegisterPage() {
  return (
    <DefaultLayout
      contentWidth="medium"
      metadata={{
        title: "Confirme seu email",
      }}
    >
      <Banner
        variant="warning"
        title="Estamos Quase Lá!"
        description="Um email foi enviado pelo nosso time para o endereço informado. Clique no link e finalize seu processo de cadastro."
      ></Banner>
    </DefaultLayout>
  );
}
