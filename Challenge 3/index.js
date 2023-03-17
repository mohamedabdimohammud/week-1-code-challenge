// Define the tax brackets and rates
const taxBrackets = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 40667, rate: 0.15 },
    { min: 40668, max: 57133, rate: 0.20 },
    { min: 57134, max: 74000, rate: 0.25 },
    { min: 74001, max: 110000, rate: 0.30 },
    { min: 110001, max: Infinity, rate: 0.35 }
  ];
  
  // Define the NHIF and NSSF rates
  const nhifRate = 0.06;
  const nssfRate = 0.12;
  
  // Prompt the user to enter the basic salary and benefits
  const basicSalary = prompt("Please enter the basic salary:");
  const benefits = prompt("Please enter the benefits:");
  
  // Calculate the gross salary
  const grossSalary = Number(basicSalary) + Number(benefits);
  
  // Calculate the payee (i.e. tax)
  let taxableIncome = grossSalary - 24384; // Subtract the personal relief
  if (taxableIncome <= 0) {
    taxableIncome = 0;
  }
  let payee = 0;
  for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];
    if (taxableIncome <= 0) {
      break;
    }
    const taxableAmount = Math.min(bracket.max - bracket.min, taxableIncome);
    payee += taxableAmount * bracket.rate;
    taxableIncome -= taxableAmount;
  }
  
  // Calculate the NHIF and NSSF deductions
  const nhifDeductions = Math.min(grossSalary * nhifRate, 1700);
  const nssfDeductions = Math.min(grossSalary * nssfRate, 1800);
  
  // Calculate the net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
  // Output the results
  console.log(`Gross salary: ${grossSalary}`);
  console.log(`Payee (Tax): ${payee}`);
  console.log(`NHIF deductions: ${nhifDeductions}`);
  console.log(`NSSF deductions: ${nssfDeductions}`);
  console.log(`Net salary: ${netSalary}`);
  