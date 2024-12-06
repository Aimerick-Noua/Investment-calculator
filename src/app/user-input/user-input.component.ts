import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InverstmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InverstmentInput>()
  // calculate = output<InverstmentInput>();
  // enteredInitialInvestment='0'
  // enteredAnnualInvestment='0'
  // enteredExpectedReturn='5'
  // enteredDuration='10'
  enteredInitialInvestment=signal('0')
  enteredAnnualInvestment=signal('0')
  enteredExpectedReturn=signal('5')
  enteredDuration=signal('10')

  constructor(private investmentService:InvestmentService){}
  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
      annualInvestment:+this.enteredAnnualInvestment(),
      expectedReturn:+this.enteredExpectedReturn(),
      duration:+this.enteredDuration()
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
