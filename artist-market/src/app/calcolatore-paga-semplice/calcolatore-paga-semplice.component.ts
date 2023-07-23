import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getFormValues } from '../utils/form.utils';
import { ICalcolatoreSempliceStipendioOutput } from '../inferfaces/ comparatore-lavoro.interface';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { scrollToCenter } from '../utils/general.utils';

@Component({
  selector: 'app-calcolatore-paga-semplice',
  templateUrl: './calcolatore-paga-semplice.component.html',
  styleUrls: ['./calcolatore-paga-semplice.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalcolatorePagaSempliceComponent {
  datiLavoroForm: FormGroup | undefined;
  pagaStipendioOutput: ICalcolatoreSempliceStipendioOutput = {
    
  };

  constructor (private formBuilder: FormBuilder) { registerLocaleData(localeIt, 'it');}

  ngOnInit() {
    this.datiLavoroForm = this.formBuilder.group({
      stipendioMensile: new FormControl( null, Validators.required),
      buoniPasto: new FormControl(),
      straordinari: new FormControl(),
      bonusProduttività: new FormControl(),
      mensilità: new FormControl(13, Validators.required),
      giorniLavoroSettimana: new FormControl(5, Validators.required),
      oreLavoroGiorno: new FormControl(8, Validators.required)
    })
   }

   resetField(formControl: AbstractControl) {
    formControl.reset();
   }

   submitForm() {
    if (this.datiLavoroForm?.valid) {
      const formValues = getFormValues(this.datiLavoroForm);
      this.calculateOutput(formValues);
      scrollToCenter('calcolatore-semplice-results');
    }
   }

   calculateOutput(formValues: any) {
    this.pagaStipendioOutput.entrateNetteAnnue = formValues.stipendioMensile * formValues.mensilità;
    this.pagaStipendioOutput.entrateNetteMese = formValues.stipendioMensile;
    this.pagaStipendioOutput!.entreateGiornoLavoro = formValues.stipendioMensile / 20;
    this.pagaStipendioOutput!.pagaOrariaNetta = this.pagaStipendioOutput!.entreateGiornoLavoro / formValues.oreLavoroGiorno;
   }
}
