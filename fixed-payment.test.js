const checkPayment = require('./fixed-payment');

describe("checkPayment()", () => { 

  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r.success).toBe(true);
  });

  test("amount equal to 100 is accepted", () => {
    const r = checkPayment(100);
    expect(r.success).toBe(true);
  });
  test("amount less than 100 is rejected", () => {
    const r = checkPayment(50);
    expect(r.success).toBe(false);
  });
  test("amount equal to 0 is invalid", () => {
    const r = checkPayment(0);
    expect(r.success).toBe(false);
    expect(r.message).toBe("Invalid amount");
  });
  test("amount less than 0 is invalid", () => {
    const r = checkPayment(-100);
    expect(r.success).toBe(false);
    expect(r.message).toBe("Invalid amount");
  });
  test("amount is  string will show invalid amount", () => {
    const r = checkPayment("ahnaf");
    expect(r.success).toBe(false);
    expect(r.message).toBe("Invalid amount");
  });

  test("amount is MAX_SAFE_INTEGER is accepted", () => {
    const r = checkPayment(Number.MAX_SAFE_INTEGER);
    expect(r.success).toBe(true);
  });

  test("amount is undefined is invalid", () => {
    const r = checkPayment(undefined);
    expect(r.success).toBe(false);
    expect(r.message).toBe("Invalid amount");
  });

  test("amount is null is invalid", () => {
    const r = checkPayment(null);
    expect(r.success).toBe(false);
    expect(r.message).toBe("Invalid amount");
  });

});
