import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("PUT /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("With incorrect HTTP method", async () => {
        const response = await fetch(
          "http://localhost:3000/api/v1/migrations",
          {
            method: "PUT",
          },
        );
        expect(response.status).toBe(405);

        const responseBody = await response.json();

        expect(responseBody).toEqual({
          name: "MethodNotAllowedError",
          message: "Método não permitido para este endpoint",
          action: "Verifique o método HTTP enviado para este endpoint",
          status_code: 405,
        });
      });
    });
  });
});
