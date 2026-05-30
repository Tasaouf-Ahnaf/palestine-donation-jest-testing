White Box Testing with JEST

What the project is — a payment validation function
What checkPayment(amount) does in one line

Function Overview

Input: amount
Output: { success, message }
The 4 rules the function must follow

How to Run Tests

Install dependencies: npm install
Run: npx jest
Which file to test against: payment.js or fixed-payment.js

Test Cases Summary

Total number of tests: 9
What categories they cover: valid payments, invalid amounts, edge cases, type checks

Bugs Found in Original Code

Brief list of the bugs — wrong condition for 0, no negative check, no type check, amount === 100 not accepted

Fixed Version

What was changed in the fixed code and why

File Structure
payment.js          ← original buggy code
fixed-payment.js    ← fixed code
payment.test.js     ← test file
README.md           ← this file
Tech Stack

Language: JavaScript
Test Framework: Jest
Runtime: Node.js
