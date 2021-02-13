import {Entreprise, SAS} from "./types.ts";

const e: Entreprise = new SAS('siret', 'den', 'addr')
e.CA = 10000
console.log(e.calculImpots())
