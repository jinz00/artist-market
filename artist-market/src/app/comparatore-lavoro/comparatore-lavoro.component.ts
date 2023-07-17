import { IDatiEconomici, IImporti } from './../inferfaces/ comparatore-lavoro.interface';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparatore-lavoro',
  templateUrl: './comparatore-lavoro.component.html',
  styleUrls: ['./comparatore-lavoro.component.scss']
})
export class ComparatoreLavoroComponent implements OnInit {
datiLavoroForm: FormGroup | undefined;
controlNumber = 1;
mesiAnno = 12;
giorniMese = 30.416666;
settimaneMese = 4.345;
oreGiorno = 24;
entrateAnnue: number = 0;
usciteAnnue = 0;
bilancioAnnuo = 0;
stipendioNettoMedioSingle = 21804;
mesiLavoroAnno: number | undefined;
giorniLavoroMese: number | undefined;
oreLavoroGiorno: number | undefined;
showResults = true; // metti false e show solo quando submit


constructor (private formBuilder: FormBuilder) {}

 ngOnInit() {
  this.datiLavoroForm = this.formBuilder.group({
    datiEconomici: this.formBuilder.group({
      oreLavoroSettimana: new FormControl('', Validators.required),
      giorniLavoroSettimana: new FormControl('', Validators.required),
      mesiLavoroAnno: new FormControl('', Validators.required),
      ral: new FormControl( 0, Validators.required),
      buoniPasto: new FormControl(),
      bonusProduttività: new FormControl(),
      straordinari: new FormControl(),
      aumentoAnnuo: new FormControl(),
      benefitAnnuo: this.formBuilder.array([]),
      benefitMensile: this.formBuilder.array([]),
      benefitUnaTantum: this.formBuilder.array([]),
      spesaFissa: this.formBuilder.array([]),
      spesaRicorrente: this.formBuilder.array([]),
    })
  })
 }

 formGroupArray(form: FormGroup, formgroup: string) {
  const formGroup = form.get('datiEconomici')?.get(formgroup);
  return Object.keys(formGroup!.getRawValue()).map(key => {
    return {
      nome: key,
      valore: formGroup!.get(key)!.value
    };
  });
}


getFormValues(formGroup: FormGroup): any {
  const formValues:any = {};

  Object.keys(formGroup.controls).forEach(controlName => {
    const control = formGroup.controls[controlName];

    if (control instanceof FormGroup) {
      formValues[controlName] = this.getFormValues(control); // Chiamata ricorsiva per FormGroup annidati
    } else {
      formValues[controlName] = control.value;
    }
  });

  return formValues;
}

get benefitAnnuo(): FormArray {
  return this.datiLavoroForm!.get('datiEconomici')!.get('benefitAnnuo') as FormArray;
}
get benefitMensile(): FormArray {
  return this.datiLavoroForm!.get('datiEconomici')!.get('benefitMensile') as FormArray;
}
get benefitUnaTantum(): FormArray {
  return this.datiLavoroForm!.get('datiEconomici')!.get('benefitUnaTantum') as FormArray;
}
get spesaFissa(): FormArray {
  return this.datiLavoroForm!.get('datiEconomici')!.get('spesaFissa') as FormArray;
}
get spesaRicorrente(): FormArray {
  return this.datiLavoroForm!.get('datiEconomici')!.get('spesaRicorrente') as FormArray;
}

aggiungiControl(formArray: FormArray, years?: boolean) {
  let nuovoBenefit
  if (years) {
    nuovoBenefit = this.formBuilder.group({
      valore: new FormControl(null),
      anni: new FormControl(null)
    });
  } else {
    nuovoBenefit = this.formBuilder.group({
      valore: new FormControl(null),
    });
  }
  formArray.push(nuovoBenefit);
}

rimuoviControl(formArray: FormArray, index: number) {
  formArray.removeAt(index);
}

getMoneyAmountYear(datiEconomici:IDatiEconomici) {
  this.oreLavoroGiorno = +datiEconomici.oreLavoroSettimana / +datiEconomici.giorniLavoroSettimana;
  this.giorniLavoroMese = datiEconomici.giorniLavoroSettimana * this.settimaneMese;
  this.mesiLavoroAnno = datiEconomici.mesiLavoroAnno;

  const totBuoniPasto = this.mesiLavoroAnno ? datiEconomici.buoniPasto * this.mesiLavoroAnno : 0;
  const totStraordinari = this.mesiLavoroAnno ? datiEconomici.straordinari * this.mesiLavoroAnno : 0;
  const totBenefitMensili = this.mesiLavoroAnno ? this.reduceSomma(datiEconomici.benefitMensile) * this.mesiLavoroAnno : 0;
  const totSpeseRicorrenti = this.mesiLavoroAnno ? this.reduceSomma(datiEconomici.spesaRicorrente) * this.mesiLavoroAnno : 0;
  const usciteFisseAnnualizzate = datiEconomici.spesaFissa.reduce((accumulator, current) => {
    if (current.valore && current.anni && !isNaN(current.valore) && !isNaN(current.anni)) {
      const division = current.valore / current.anni;
      return accumulator + division;
    }
    return accumulator;
  }, 0);

  this.entrateAnnue =
    this.getNettoAnnuoFromRAL(datiEconomici.ral) +
    totBuoniPasto +
    +datiEconomici.bonusProduttività +
    totStraordinari +
    this.reduceSomma(datiEconomici.benefitAnnuo) +
    totBenefitMensili +
    this.reduceSomma(datiEconomici.benefitUnaTantum);

  this.usciteAnnue = totSpeseRicorrenti + usciteFisseAnnualizzate;
  this.bilancioAnnuo = this.entrateAnnue - this.usciteAnnue;

// TO DO considerare aumento annuo
// non  ha senso pensare ad unaumento all anno perche poco credibile piuttosto a fine del contratto che livello e quindi che stipendio es se dico che lavoro 5 anni probabile che saro specialist quindi quanto guadagna uno specialist?
  console.log(datiEconomici,this.oreLavoroGiorno,this.giorniLavoroMese, this.mesiLavoroAnno,datiEconomici.oreLavoroSettimana , +datiEconomici.giorniLavoroSettimana, this.entrateAnnue, this.usciteAnnue, this.bilancioAnnuo);
}

reduceSomma(array: IImporti[]) {
  return array.reduce((acc, curr) => acc + (curr.valore ? +curr.valore : 0), 0);
}


getNettoAnnuoFromRAL(ral: number) {
  return ral * 1
}

onSubmit() {
  const datiEconomici: IDatiEconomici = this.getFormValues(this.datiLavoroForm!).datiEconomici;
  this.getMoneyAmountYear(datiEconomici);
}
}
