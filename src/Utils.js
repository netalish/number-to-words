const LESS_THAN_TWENTY =
  "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
    " "
  );
const TENTHS_LESS_THAN_HUNDRED =
  "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

//=========================================
//             Test Cases
//=========================================
var r = 0; // test tracker
r |= test(0, "zero");
r |= test(5, "five");
r |= test(10, "ten");
r |= test(19, "nineteen");
r |= test(33, "thirty-three");
r |= test(100, "one hundred");
r |= test(111, "one hundred eleven");
r |= test(890, "eight hundred ninety");
r |= test(1234, "one thousand two hundred thirty-four");
r |= test(1200012, "one million two hundred thousand twelve");
r |= test(7500075, "seven million five hundred thousand seventy-five");
r |= test(-75000075, "minus seventy-five million seventy-five");
r |= test(1000, "one thousand");
r |= test(1000000, "one million");
r |= test(
  999999999,
  "nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
);

if (r === 0) console.log("All Tests Passed.");

//=====================================
// Tester Function
//=====================================
function test(n, should) {
  let result = number2words(n);
  if (result !== should) {
    console.log(`${n} Output   : ${result}\n${n} Should be: ${should}`);
    return 1;
  }
}

function number2words(n) {
  if (n.length > 9) return `Number too long`;
  if (n < 0) {
    return "minus " + number2words(Math.abs(n));
  }

  if (n < 20) return LESS_THAN_TWENTY[n];
  let digit = n % 10;
  if (n < 100) {
    return (
      TENTHS_LESS_THAN_HUNDRED[Math.floor(n / 10) - 2] +
      (digit ? "-" + LESS_THAN_TWENTY[digit] : "")
    );
  }

  if (n < 1000) {
    return (
      LESS_THAN_TWENTY[Math.floor(n / 100)] +
      " hundred" +
      (n % 100 === 0 ? "" : " " + number2words(n % 100))
    );
  }

  if (n < 1000000) {
    return (
      number2words(Math.floor(n / 1000)) +
      " thousand" +
      (n % 1000 !== 0 ? " " + number2words(n % 1000) : "")
    );
  }

  return (
    number2words(Math.floor(n / 1000000)) +
    " million" +
    (n % 1000000 !== 0 ? " " + number2words(n % 1000000) : "")
  );
}

export default number2words;
