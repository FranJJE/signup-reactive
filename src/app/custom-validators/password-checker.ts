import { FormGroup } from '@angular/forms'


export function PasswordChecker(controlName: string, comparedControlName: string) {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[comparedControlName];

        if(password.value !== confPassword.value) {
            confPassword.setErrors({ mustmatch: true });
        } else {
            confPassword.setErrors(null);
        }
    }
}