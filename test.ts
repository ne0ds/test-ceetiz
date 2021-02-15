import { AutoEntreprise, SAS } from "./entreprise.ts";
import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Calcul impôts auto-entreprise", () => {
  const e = new AutoEntreprise("1234", "AE");
  e.CA = 10000;
  assertEquals(e.calculImpots(), 10000 * AutoEntreprise.TAUX_IMPOSITION);
});

Deno.test("Calcul impôts SAS", () => {
  const e = new SAS("1234", "SAS", "123 rue toto");
  e.CA = 10000;
  assertEquals(e.calculImpots(), 10000 * SAS.TAUX_IMPOSITION);
});
