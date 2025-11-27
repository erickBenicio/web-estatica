import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export const skinsJSON = (path) => require(path);