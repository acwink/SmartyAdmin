import { defineConfig } from "vite";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";

console.log(1);

export default defineConfig({
  plugins: [vueJSX(), Unocss()],
});
