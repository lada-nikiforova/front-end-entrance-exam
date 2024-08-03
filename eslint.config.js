import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    base: "/front-end-entrance-exam ",
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
