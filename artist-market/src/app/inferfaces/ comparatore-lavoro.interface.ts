export interface IDatiEconomici {
  aumentoAnnuo: number,
  bonusProduttività: number;
  buoniPasto: number;
  ral: number;
  straordinari: number;
  benefitAnnuo: IImporti[];
  benefitMensile: IImporti[];
  benefitUnaTantum: IImporti[];
  spesaFissa: IImporti[];
  spesaRicorrente: IImporti[];
  oreLavoroSettimana: number;
  giorniLavoroSettimana: number;
  mesiLavoroAnno: number;
}

export interface IImporti {
  valore: number,
  anni?: number,
}
