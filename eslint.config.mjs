import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const config = [
  js.configs.recommended,
  ...next,
  jest.configs["flat/recommended"],
  prettier,
];

export default config;
