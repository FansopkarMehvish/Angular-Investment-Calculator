import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputData } from './user-input.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';
  @Output() calculate = new EventEmitter<UserInputData>();

  onSubmit(){
    this.calculate.emit({
      initialInvestment : +this.initialInvestment,
      annualInvestment : +this.annualInvestment,
      expectedReturn : +this.expectedReturn,
      duration : +this.duration
    })
    console.log("Success");
  }


}
