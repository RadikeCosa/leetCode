// vitest.setup.ts
// Este archivo configura el entorno global para los tests de Vitest
globalThis.describe = describe;

import { expect, it, describe } from "vitest";

import type { ExpectStatic, TestAPI, SuiteAPI } from "vitest";
declare global {
  // eslint-disable-next-line no-var
  var expect: ExpectStatic;
  // eslint-disable-next-line no-var
  var it: TestAPI;
  // eslint-disable-next-line no-var
  var describe: SuiteAPI;
}

globalThis.expect = expect;
globalThis.it = it;
globalThis.describe = describe;
