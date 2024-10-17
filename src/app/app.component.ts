import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { ResultCalculator } from './result-calculator.service';
import { UserInputData } from './user-input/user-input.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  private resultCalculator = inject(ResultCalculator) 

  calculateResult(data: UserInputData){
    return this.resultCalculator.calculateInvestmentResults(data);
  }
}
