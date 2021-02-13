export abstract class Entreprise {
    CA: number = 0

    constructor(readonly siret: string, readonly denomination: string) {}

    abstract calculImpots(): number
}

export class AutoEntreprise extends Entreprise {
    calculImpots(): number {
        return this.CA * 0.25;
    }
}

export class SAS extends Entreprise {
    constructor(readonly siret: string, readonly denomination: string, readonly adresse: string) {
        super(siret, denomination)
    }

    calculImpots(): number {
        return this.CA * 0.33;
    }
}
