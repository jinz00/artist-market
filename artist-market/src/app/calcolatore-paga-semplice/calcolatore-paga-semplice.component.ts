import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getFormValues } from '../utils/form.utils';
import { ICalcolatoreSempliceStipendioInput, ICalcolatoreSempliceStipendioOutput } from '../inferfaces/ comparatore-lavoro.interface';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { scrollToCenter, scrollToElement } from '../utils/general.utils';

@Component({
  selector: 'app-calcolatore-paga-semplice',
  templateUrl: './calcolatore-paga-semplice.component.html',
  styleUrls: ['./calcolatore-paga-semplice.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalcolatorePagaSempliceComponent implements OnInit, AfterViewChecked{
  datiLavoroForm: FormGroup | undefined;
  pagaStipendioOutput: ICalcolatoreSempliceStipendioOutput = {
    
  };
  pagaStipendioTotOutput: ICalcolatoreSempliceStipendioOutput = {
    
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

   ngAfterViewChecked() {
   if (this.pagaStipendioOutput.entrateNetteAnnue) {
    scrollToCenter('calcolatore-semplice-results');
   }
  }

   resetField(formControl: AbstractControl) {
    formControl.reset();
   }

   submitForm() {
    if (this.datiLavoroForm?.valid) {
      const formValues = getFormValues(this.datiLavoroForm);
      this.calculateOutput(formValues);
      this.calculateOutputTot(formValues);
    }
   }

   calculateOutput(formValues: ICalcolatoreSempliceStipendioInput) {
    this.pagaStipendioOutput.entrateNetteAnnue = formValues.stipendioMensile * formValues.mensilità;
    this.pagaStipendioOutput.entrateNetteMese = formValues.stipendioMensile;
    this.pagaStipendioOutput!.entreateGiornoLavoro = formValues.stipendioMensile / 20;
    this.pagaStipendioOutput!.pagaOrariaNetta = this.pagaStipendioOutput!.entreateGiornoLavoro / formValues.oreLavoroGiorno;
   }

   calculateOutputTot(formValues: ICalcolatoreSempliceStipendioInput) {
    this.pagaStipendioTotOutput.entrateNetteAnnue = formValues.stipendioMensile * formValues.mensilità + formValues.buoniPasto * 11 + formValues.straordinari*11 + formValues.bonusProduttività;
    this.pagaStipendioTotOutput.entrateNetteMese = this.pagaStipendioTotOutput.entrateNetteAnnue / 12;
    this.pagaStipendioTotOutput!.entreateGiornoLavoro = this.pagaStipendioTotOutput.entrateNetteMese / 20;
    this.pagaStipendioTotOutput!.pagaOrariaNetta = this.pagaStipendioTotOutput!.entreateGiornoLavoro / formValues.oreLavoroGiorno;
   }
}
