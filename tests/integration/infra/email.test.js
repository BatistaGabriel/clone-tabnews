import email from "infra/email.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.deleteAllEmails();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await email.send({
      from: "Contato <contato@contato.com.br>",
      to: "contato@curso.com",
      subject: "Teste de assunto",
      text: "Teste de corpo",
    });

    await email.send({
      from: "Contato <contato@contato.com.br>",
      to: "contato@curso.com",
      subject: "Teste de assunto - ultimo enviado",
      text: "Teste de corpo - ultimo enviado",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<contato@contato.com.br>");
    expect(lastEmail.recipients[0]).toBe("<contato@curso.com>");
    expect(lastEmail.subject).toBe("Teste de assunto - ultimo enviado");
    expect(lastEmail.text).toBe("Teste de corpo - ultimo enviado\n");
  });
});
