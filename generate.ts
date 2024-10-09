import * as fs from "fs";

const codesData = `400 - Bad Request
401 - Unauthorized
402 - Payment Required
403 - Forbidden
404 - Not Found
405 - Method Not Allowed
406 - Not Acceptable
407 - Proxy Authentication Required
408 - Request Timeout
409 - Conflict
410 - Gone
411 - Length Required
412 - Precondition Failed
413 - Payload Too Large
414 - URI Too Long
415 - Unsupported Media Type
416 - Range Not Satisfiable
417 - Expectation Failed
418 - I'm a teapot
421 - Misdirected Request
422 - Unprocessable Entity
423 - Locked
424 - Failed Dependency
425 - Too Early
426 - Upgrade Required
428 - Precondition Required
429 - Too Many Requests
431 - Request Header Fields Too Large
451 - Unavailable For Legal Reasons
500 - Internal Server Error
501 - Not Implemented
502 - Bad Gateway
503 - Service Unavailable
504 - Gateway Timeout
505 - HTTP Version Not Supported
506 - Variant Also Negotiates
507 - Insufficient Storage
508 - Loop Detected
510 - Not Extended
511 - Network Authentication Required`;

const codes: { name: string; code: number; message: string }[] = codesData
  .split("\n")
  .map((e) => {
    const [code, message] = e.split(" - ");
    return {
      code: +code,
      name: message.split(" ").join("").replace("'", "") + "Exception",
      message,
    };
  });

const baseFileContent = `import { HttpException } from "./HttpException";

export class __name__ extends HttpException {
  constructor(message = "__message__") {
    super(__code__, message);
  }
}
`;

const factoryCaseBase = `    case __code__:
      return new __name__();`;

const factoryImportBase = `import { __name__ } from "./__name__";`;

const factoryFileContentBase = `import { HttpException } from "./HttpException";
__imports__

export function factory(code): HttpException {
  switch (code) {
__cases__
  }

  return new HttpException(code, "");
}
`;

const indexFileExportBase = `export { __name__ } from "./__name__";`;

const factoryImports: string[] = [];
const factoryCases: string[] = [];
const indexFileExports: string[] = [];

for (const data of codes) {
  const fileContent = baseFileContent
    .replace("__name__", data.name)
    .replace("__message__", data.message)
    .replace("__code__", data.code.toString());

  fs.writeFileSync(`src/${data.name}.ts`, fileContent);

  factoryCases.push(
    factoryCaseBase
      .replace("__name__", data.name)
      .replace("__code__", data.code.toString())
  );

  factoryImports.push(factoryImportBase.replaceAll("__name__", data.name));
  indexFileExports.push(indexFileExportBase.replaceAll("__name__", data.name));
}

const factoryFileContent = factoryFileContentBase
  .replace("__imports__", factoryImports.join("\n"))
  .replace("__cases__", factoryCases.join("\n\n"));

fs.writeFileSync("src/factory.ts", factoryFileContent);

const indexFileContent = [
  'export { HttpException } from "./HttpException";',
  ...indexFileExports,
  'export { factory } from "./factory";',
  "",
].join("\n");
fs.writeFileSync("src/index.ts", indexFileContent);
