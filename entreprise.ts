export abstract class Entreprise {
  CA = 0;

  constructor(readonly siret: string, readonly denomination: string) {}

  abstract calculImpots(): number;
}

export class AutoEntreprise extends Entreprise {
  static readonly TAUX_IMPOSITION = 0.25;

  calculImpots(): number {
    return this.CA * AutoEntreprise.TAUX_IMPOSITION;
  }
}

export class SAS extends Entreprise {
  static readonly TAUX_IMPOSITION = 0.33;

  constructor(
    readonly siret: string,
    readonly denomination: string,
    readonly adresse: string,
  ) {
    super(siret, denomination);
  }

  calculImpots(): number {
    return this.CA * SAS.TAUX_IMPOSITION;
  }
}
