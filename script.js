function calculateNetUC() {
  const ucAmount = 2350.93;
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

  // Display the net UC amount
  document.getElementById("netUCAmount").innerText = `£${netUC.toFixed(2)}`;
}

function resetForm() {
  document.getElementById("paymentForm").reset();
  document.getElementById("netUCAmount").innerText = "£0.00";
}
