import React, { useState } from 'react';
import './styles.css';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  const calculateEmi = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseInt(loanTerm);

    if (
      isNaN(P) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      P < 0 ||
      annualRate <= 0 ||
      years <= 0
    ) {
      setError('Invalid input');
      setMonthlyPayment(null);
      return;
    }

    const r = annualRate / 12 / 100;
    const n = years * 12;

    const M =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setMonthlyPayment(M.toFixed(2));
    setError('');
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>

      <div>
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="interestRate">Annual Interest Rate</label>
        <input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Loan Term">Loan Term</label>
        <input
          id="Loan Term"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>

      <button onClick={calculateEmi}>Calculate</button>

      {error && <p>{error}</p>}

      {monthlyPayment !== null && (
        <p aria-label="result">
          Monthly Payment: {monthlyPayment}
        </p>
      )}
    </div>
  );
}

export default MortgageCalculator;
