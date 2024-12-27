// Question # 2

document.write("<h3>Answer no 2</h3>");

let a = 2;
let b = 1;

document.write("Initial Value of a is " + a + "<br>");
document.write("Initial Value of b is " + b + "<br><br>");

--a;
let step1 = --a - --b;
document.write("Value of First Step is " + step1 + "<br><br>");

let step2 = step1 + ++b;
document.write("Value of Second Step is " + step2 + "<br><br>");

let result = step2 + b--;


document.write("Final Result is " + result);


// Question # 3

document.write("<h3>Answer no 3</h3>");

let userName = prompt("Enter Your Name");
document.write("Welcome " + userName + " to our Page"  + "<br></br>");


// Question # 5

document.write("<h3>Answer no 5</h3>");


let tableNumber = prompt("Enter Table Number you want to display");
document.write("Table of " + tableNumber + "<br>");
document.write("-----------------" + "<br><br>" );

document.write(tableNumber + " x " + " 1 " + " = " + tableNumber * 1 + "<br></br>");
document.write(tableNumber + " x " + " 2 " + " = " + tableNumber * 2 + "<br></br>");
document.write(tableNumber + " x " + " 3 " + " = " + tableNumber * 3 + "<br></br>");
document.write(tableNumber + " x " + " 4 " + " = " + tableNumber * 4 + "<br></br>");
document.write(tableNumber + " x " + " 5 " + " = " + tableNumber * 5 + "<br></br>");
document.write(tableNumber + " x " + " 6 " + " = " + tableNumber * 6 + "<br></br>");
document.write(tableNumber + " x " + " 7 " + " = " + tableNumber * 7 + "<br></br>");
document.write(tableNumber + " x " + " 8 " + " = " + tableNumber * 8 + "<br></br>");
document.write(tableNumber + " x " + " 9 " + " = " + tableNumber * 9 + "<br></br>");
document.write(tableNumber + " x " + " 10 " + " = " + tableNumber * 10 + "<br></br>");


// Question # 6

document.write("<h3>Answer no 6</h3>");

let sub1 = prompt("Enter Subject Name 1");
let obt1 = +prompt("Enter Obtained Marks to Subject 1");
let sub2 = prompt("Enter Subject Name 2");
let obt2 = +prompt("Enter Obtained Marks to Subject 2");
let sub3 = prompt("Enter Subject Name 3");
let obt3 = +prompt("Enter Obtained Marks to Subject 3");

let total_marks = 100;
let totalObtainMarks = obt1 + obt2 + obt3;
let totalPrecent = totalObtainMarks / 300 * 100;

document.write("Subject" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Total Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Marks Obtained" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Percentage" + "<br><br>");
document.write(sub1 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +"100" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt1 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt1 * 100 / 100 + "%" + "<br>");
document.write(sub2 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +"100" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt2 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt2 * 100 / 100 + "%" + "<br>");
document.write(sub3 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +"100" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt3 + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obt3 * 100 / 100 + "%" + "<br><br>");
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "300" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalObtainMarks + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalPrecent + "%" + "<br>");