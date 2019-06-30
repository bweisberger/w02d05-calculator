console.log('window is loaded');

const calculator = {
  enteredValue: "0",
  lastValue: "",
  resultValue: "",
  calculate: function(num1, num2, operation) {

    if (operation === '+') {
      return num1 + num2;
    }
    else if (operation === '-') {
      return num1 - num2;
    }
    else if (operation === 'X') {
      return num1 * num2;
    }
    else if (operation === '/') {
      return num1 / num2;
    }
    else if (operation === '^') {
      return num1**num2;
    }
  },
  updateEntry: function(str) {
    //if the displayedValue is a result, set lastValue to resultValue

    if ($("#current-num").text() == this.resultValue){
      // this.lastValue = this.resultValue;
      //if the next button pressed is an operation, add lastValue to enteredValue before operation
      if(calculator.isOperation(str)){
        this.enteredValue += this.resultValue;
      }
      else{
        this.lastValue = this.resultValue;
        this.displayLast();
      }
    }// if the enteredValue is just 0 (the starting value)
    // reset enteredValue to empty string and then add
    // string argument (button.text()) to empty string
    if (this.enteredValue === "0") {
      this.enteredValue = "";
    }  //clear if button.text() is 'c'
    if (str === "c") {
      this.clearEntry();
      //if button.text() is &larr; (html code for left arrow)
      // remove the last character from the string.
    // } else if (str === "&larr;") {
    //   this.enteredValue -= this.enteredValue[this.enteredValue.length - 1];
    } else if (this.isNum(str)) {
      this.enteredValue += str
    } else {
      this.enteredValue += ` ${str} `;
    }
  },
  isNum: function(str) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ")", "("]
    for (let i = 0; i < numbers.length; i++){
      if (str === numbers[i]) {
        return true;
      }
    }
    return false;
  },
  isOperation(str) {
    const operations = ["X", "/", "^", "+", "-"];
    for (let i = 0; i < operations.length; i++){
      if (str === operations[i]){
        return true;
      }
    }
    return false;
  },
  displayEntry: function() {
    // console.log($('#current-num').text(),"<----text of h4#current-num");
    // console.log(this.enteredValue);
    $('#current-num').text(this.enteredValue);
    // console.log($('#current-num').text(),"<----text of h4#current-num");

    // console.log(numberDisplay);
    // numberDisplay.text() = this.enteredValue;

  },
  displayResult: function() {
    $('#current-num').text(this.resultValue)
  },
  displayLast: function() {
    $("#last-num").text("MEM " + this.lastValue)
  },
  clearEntry: function() {
    if (this.enteredValue == "0"){
      this.clearLast();
    } else {
    this.enteredValue = "0";
    this.displayEntry();
    }
  },
  clearLast: function() {
    this.lastValue = "";
    $("#last-num").text(this.lastValue)
  },
  execute: function() {
    //grab arguments from entered value by splitting on space
    const arguments = this.enteredValue.split(" ");
    //reset entered value
    this.enteredValue = "";
    const num1 = Number(arguments[0]);
    const num2 = Number(arguments[2]);
    const operation = arguments[1];
    //use calculate function to set resultValue equal to result of calculation
    this.resultValue = calculator.calculate(num1, num2, operation);
  }

}

// console.log(calculator.calculate(1, 3, "X"));
// console.log(calculate(1, 3, "+"));
// console.log(calculate(1, 3, "-"));
// console.log(calculate(1, 3, '/'));
// console.log(calculate(1, 3, '^'));

//create an event listener for each button
$('#0').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry();
  // console.log(calculator.enteredValue);
});
$('#1').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry();
  // console.log(calculator.enteredValue);
});
$('#2').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#3').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#4').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#5').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#6').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#7').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#8').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#9').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry();
  // console.log(calculator.enteredValue);
});
$('#add').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#subtract').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#multiply').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#divide').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry("/");
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#memory').on('click', function(e){
  // console.log(e.target)
  if (calculator.lastValue) {
  calculator.enteredValue += calculator.lastValue;
  calculator.clearLast();
  calculator.displayEntry(); }
  else {
    calculator.lastValue = calculator.resultValue;
    calculator.clearEntry();
    calculator.displayLast();
    calculator.displayEntry();
  }
  // console.log(calculator.enteredValue);
});
$('#clear').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#open-parentheses').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#closed-parentheses').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#decimal').on('click', function(e){
  // console.log(e.target)
  calculator.updateEntry(e.target.innerText);
  calculator.displayEntry()
  // console.log(calculator.enteredValue);
});
$('#equals').on('click', function(e){
  // console.log(e.target)
  calculator.execute();
  calculator.displayResult();
  // console.log(calculator.enteredValue);
});
