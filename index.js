/*Abbreviate a Two Word Name

https://www.codewars.com/kata/abbreviate-a-two-word-name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F

Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");

function abbrevName(name){
    // code away
}

*/

function abbrevName(name){
    var splitName = name.split(" "); // splits name into 2: 0 = 'Sam', 1 = 'Harris'
    var initials1 = splitName[0].substring(0, 1).toUpperCase(); //returns Sam (0 word), then first letter 'S' as uppercase
    var initials2 = splitName[1].substring(0, 1).toUpperCase(); //returns Harris (1 word), then first letter 'H' as uppercase
      return initials1 + "." + initials2; // return initials plus a '.' in the middle
  }
  
  console.log(abbrevName("Sam Harris"));
  
  /*
  Hint
  #1 Start by splitting the name
  #2 Once the name is split, return the first letter of the first name.  Perhaps use the substring method for this?
  #3 Now do the same for the second name
  #4 Good practise is to make them to uppercase
  #5 Now return the initials + "." in the middle
  */