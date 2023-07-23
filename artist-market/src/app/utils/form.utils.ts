import { FormGroup } from "@angular/forms";

export const getFormValues = (formGroup: FormGroup): any => {
  const formValues:any = {};

  Object.keys(formGroup.controls).forEach(controlName => {
    const control = formGroup.controls[controlName];

    if (control instanceof FormGroup) {
      formValues[controlName] = getFormValues(control); // Chiamata ricorsiva per FormGroup annidati
    } else {
      formValues[controlName] = control.value;
    }
  });

  return formValues;
}