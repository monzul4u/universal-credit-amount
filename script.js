function calculateNetUC() {
  const ucAmount = 2350;
  const monzulEarnings =
    parseFloat(document.getElementById("monzulEarnings").value) || 0;
  const salmaEarnings =
    parseFloat(document.getElementById("salmaEarnings").value) || 0;

  // Sum of Monzul and Salma's earnings
  const totalEarnings = monzulEarnings + salmaEarnings;

  // Calculate total home pay
  const homePay = (totalEarnings - 404) * 0.55;

  // Calculate net UC amount
  const netUC = ucAmount - homePay;

  // Sum of Monzul's earnings and Net UC Amount
  const monzulNetUC = monzulEarnings + netUC;

  // Display the net UC amount and Monzul's earnings + Net UC Amount
  document.getElementById(
    "netUCAmount"
  ).innerText = `Net UC Amount: £${netUC.toFixed(2)}`;
  document.getElementById(
    "monzulNetUC"
  ).innerText = `Total Accumulated Earning: £${monzulNetUC.toFixed(2)}`;
}

function resetForm() {
  document.getElementById("paymentForm").reset();
  document.getElementById("netUCAmount").innerText = "Net UC Amount: £0.00";
  document.getElementById("monzulNetUC").innerText =
    "Monzul's Earnings + Net UC Amount: £0.00";
}
