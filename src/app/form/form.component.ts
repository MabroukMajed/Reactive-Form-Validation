import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private formService: FormService) {}

  submitted: boolean;
  showSuccessMessage = false;
  formControls = this.formService.form.controls;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    /*if (this.formService.form.valid) {
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
      this.submitted = false;
      this.formService.form.reset();
      //this is to be done for proper reset operation
      this.formService.form.setValue({
        fullName: "",
        email: "",
        mobile: "",
        location: ""
      });
    }*/
  }
}
