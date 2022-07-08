function telephoneCheck(str) {
    let validNum = true
    const strToArr = str.split("") // splists our string to array stores outputs here
  
  
    //regex programs is used here to define the chars we expect to see as valid or invalid
    const closeBracket = /\)/
    const openBracket = /\(/
    const nonValidChars = /[^\d\s-)(]/
  
  
  //reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
    const numbersCount = strToArr.reduce(
      (accu, char) => (isNaN(char) || char === " " ? accu : (accu += 1)),0)
  
      //test output if the code above produces 10 digits
      console.log(numbersCount)
  //we program a condition for each char types and the length of input using if statments boolean and operators
      if (numbersCount !== 10 && numbersCount !== 11) validNum = false;
      if (numbersCount === 11 && strToArr[0] !== "1" ) validNum = false;
      if (strToArr[0] === "(" && strToArr[4] !== ")") validNum = false;
      if (closeBracket.test(str) && !openBracket.test(str)) validNum = false;
      if (nonValidChars.test(str)) validNum = false;
  
  
  //regex return
    return /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/ig.test(str);
  
    return validNum;
  
  }
  
  telephoneCheck("555-555-0555");
  
  console.log("Valid number: " + telephoneCheck("2(310)111-1111")); //outputs false
  
  
  
  
  
  
  
  
  
  
  
  /* Telephone Number Validator
  Return true if the passed string looks like a valid US phone number.
  
  The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
  
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
  
   */