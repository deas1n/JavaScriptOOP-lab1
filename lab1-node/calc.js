const args = process.argv.slice(2);

if (args.length < 3) {
  console.log("Usage: node calc.js <operation> <num1> <num2>");
  process.exit(1);
}

const operation = args[0]; // add / sub / mul / div
const num1 = Number(args[1]);
const num2 = Number(args[2]);

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    result = num2 !== 0 ? num1 / num2 : "Error: division by zero";
    break;
  default:
    console.log("Unknown operation. Use add, sub, mul, or div.");
    process.exit(1);
}

console.log(`Result = ${result}`);
