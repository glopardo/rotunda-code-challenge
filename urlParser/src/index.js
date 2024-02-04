import { parseUrl } from "./urlParser.js";

const parsed = parseUrl('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10')
console.log(parsed)
