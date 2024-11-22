import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";
  let databaseInfo = {};

  if (!isLoading && data) {
    databaseInfo = data.dependencies.database;
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <div>
      última atualização: {updatedAtText}
      <br />
      <br />
      Versão do banco de dados: {databaseInfo.version || "Carregando..."}
      <br />
      Conexões ativas: {databaseInfo.opened_connections || "Carregando..."}
      <br />
      Máximo de conexões: {databaseInfo.max_connections || "Carregando..."}
    </div>
  );
}
