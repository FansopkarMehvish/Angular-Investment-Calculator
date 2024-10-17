import { Injectable } from "@angular/core";
import { UserInputData } from "./user-input/user-input.module";

@Injectable({providedIn: 'root'})
export class ResultCalculator{
    calculateInvestmentResults(data :UserInputData) {
        const annualData = [];
        let investmentValue = data.initialInvestment;
      
        for (let i = 0; i < data.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
          investmentValue += interestEarnedInYear + data.annualInvestment;
          const totalInterest =
            investmentValue - data.annualInvestment * year - data.initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            totalInterest: totalInterest,
            totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
          });
        }
        return annualData;
      }
      
}

