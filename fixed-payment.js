function checkPayment(amount) {
  if (amount === null || amount === undefined || typeof amount !== 'number' || Number.isNaN(amount)) {
    return {
      success: false,
      message: "Invalid amount"
    };
  }

  if (amount <= 0) {
    return {
      success: false,
      message: "Invalid amount"
    };
  }

  if (amount >= 100) {
    return {
      success: true,
      message: "Payment accepted"
    };
  }

  return {
    success: false,
    message: "Payment rejected"
  };
}

module.exports = checkPayment;
