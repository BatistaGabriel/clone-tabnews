const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = async () => {
  const config = await createJestConfig({
    moduleDirectories: ["node_modules", "<rootDir>"],
    testTimeout: 60000,
  })();

  return {
    ...config,
    transformIgnorePatterns: [
      "/node_modules/(?!(@faker-js/faker|uuid|node-pg-migrate)/)",
    ],
  };
};

module.exports = jestConfig;
