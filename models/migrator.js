import { resolve } from "node:path";
import { ServiceError } from "infra/errors.js";
import migrationRunner from "node-pg-migrate";
import database from "infra/database.js";

const defaultMigrationOptions = {
  dryRun: true,
  dir: resolve("infra", "migrations"),
  direction: "up",
  log: () => {},
  migrationsTable: "pgmigrations",
};

async function listPendingMigrations() {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const pendingMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dbClient: dbClient,
    });

    return pendingMigrations;
  } catch (error) {
    throw new ServiceError({
      message: "Erro ao executar a listagem de migrações pendentes",
      cause: error,
    });
  } finally {
    await dbClient?.end();
  }
}

async function runPendingMigrations() {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dbClient: dbClient,
      dryRun: false,
    });

    return migratedMigrations;
  } catch (error) {
    throw new ServiceError({
      message: "Erro ao executar as migrações pendentes",
      cause: error,
    });
  } finally {
    await dbClient?.end();
  }
}

const migrator = {
  listPendingMigrations,
  runPendingMigrations,
};

export default migrator;
