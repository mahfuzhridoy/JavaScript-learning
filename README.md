# JavaScript-learning
Javascript learning path

This is not beginners path. this tutorials or codes can help a person who already knows basics of programming.


# Variables
 Variables can be declared in many ways, using keywords let, const, var. even without using any keywords, the variable can be declared. const declares constant variables that can not be changed. var nad let does similar type of jobs but var has some problem in scopes. Thats why modern codes uses let keyword.


# Data Types
 Mainly there are two types
  1. Primitive
  2. Non-Primitive or Reference type

Primitive: Primitive values are immutable (cannot be changed directly) and are stored by value. These are stored directly in memory and compared by value. There are 7 primitive data types: 
    
    1. String: Represents text. Example "Hello World".
    2. Number: Integer and floating point. example: 42, 3.14
    3. BigInt: Very large integers. This can be done by adding a 'n' at the end of the integer. Example: 63546723571763546725n
    4. Boolean: Logical variables.Return True or False.
    5. Undefined: Variabe declared but, not assigned any value. Example: let x;
    6. Null: Intetional absence of value. example: let y = null;
    7. Symbol: Unique identifiers. This marks the value as unique even the value is same. Example: let id = Symbol("id").

Non-Primitive: Non-primitive types are objects and are stored by reference. classification of them are:

    1. Object
        |
        - Array
        - Function
        - Date
        - RegExp
        - Map
        - Set
        - WeakMap
        - WakSet
        - Custom Objects


# Type casting
 There are mainly 2 types of type casting. 
 1. Implicit: Javascript automatically converts data types when needed. This conversion follows some rules:
    --> If + is used and one operand is string, The other value will be converted to string.
    --> For math operators except +, the string will be converted to number
    --> In if, while, logical operators, values are converted to Boolean.


2. Explicit: Manual conversion of types usin methods:
    --> String() or toString() converts to string.
    --> Number() method. but converting an alphabetic character is invalid and return type is NaN.
    --> parseInt() or parseFloat() removes the text part and keeps the numbers only from the string.
    --> Boolean() returns true or false. 


# Comparison Operator.
 Comparison operators compare two values and return true or false. Some comparison operators. examples:
    1. == --> equals(checks value only)  --> 5=="5"  output: true.
    2. ===  --> Strict equal(Checks value and type) --> 5==="5"  output: false
    3. != --> not equal  --> 5 != "5" output: false
    4. !== --> strict not equal --> 5 !== "5" output true
    5. >  --> greater than  --> 10 > 5 output: true
    6. <  --> less than --> 10 < 5 output: false
    7. >= --> greater than or equal --> 5 >= 5  output: true
    8. <=  --> less than or equal --> 5 <= 10 output: true

Note: == allows type conversion (coercion). === does not allow type conversion. Always use === and !== because they are more predictable and avoid unexpected type conversion.




# Stack and Heap memory
 Stack: Javascript uses stack and Heap memory to store data. Stack memory store primitive data types like string, number, boolean etc. in the memory if we assign the value of a variable to another variable then change the second variable value, the value of first variable remains same. because the second variable gets the copy value of first variable. For example: 

   let a = 20
   let b = a; // the memory stores 20 as value of b

   b = 30;
   console.log(a, b) // output: 20 30. the value of a remains same.


Heap: The heap memory stores nor-primitive or reference data types e.g. Objects, Arrays, Functions etc. stack stores a reference address to the heap. whenever the values are changed, the value of main variable will also be changed through the refernce of the address. For example:

    let obj1 = { name: "John" };
    let obj2 = obj1;  // both variable point to the same object.

    obj2.name = "mike"
    console.log(obj1.name); // output: mike  .  the original variable value changed.




# Strng syntax
 String can be written inside double quotes "", single quotes ' ', or backtics ` `. Backticks are modern ways for string. this allows string interpolation which make the code more readable. the backtics also allows to execute codes inside strings. This is called string interpolation. 

 syntax:

 console.log(`The result of 2+2 is ${2+2}`)  // This will give the output of the mathemitacl expression as 4.



# String Properties
 1. lenth  | this is a property of string not a method. this returns the lenth of the string
 2. __proto__  | It is the secret map that gives string access to methods like .toLowerCase(), .split(), etc. Modern day JS  does not require this property. we can access this methods simply.
 3. constructor  | This property points back to the built-in String() function that created the string.



# String Methods
1. toLowerCase()  | converts the all the string characters at lower case.
2. toUpperCase()  | converts all characters to upper case
3. charAt([index number])  | returns the character at specified number.
4. indexOf('character to find')  | This will return the index number of specified character.
5. substring(start number, end number)  | this will return characters from starting number to end number, but ending number will not be included.
6. slice(start, end)  | output is similar to substring. but we can strat from a negative starting point which will return string value reversely.
7. trim()  |  removes spaces and new lines from the string at the begining and end. some others are trimStart(), trimEnd()
8. replace('search value', 'replace value') | this will replace the search value with replace vaalue.
9. includes("characters or words or part of string")  | this will search for the characters in the given string.
10. split('separator')  | this will split the string based on the separator and store them or output as array.
11. String.raw() | This is a static method which is called by String constructor. this function is similar to r prefix in python. it is used to get raw strings from template literals. using this function, substitutions are processed but, escape sequences are not. 
12. charCodeAt(index) | this returns character code of the index number based on UTF-16 code unit.
13. match(regex) | this method retrives the result of matching this string against a regular expression (regex) and provides the output as array.

***********Important**************
14. normalize()  | using this method wrongly can create a security vulnerability. if the backend applies security filter before normalizing the string, the attacker may bypass the security. For example:

step 1, security filter: The security check on Step 1 looked for the character code U+003C (<). The attacker sent U+FE64 (﹤). The system did not see a match, so it marked the input as safe.

step2, The mutation: On Step 2, normalize("NFKC") looked at U+FE64 and said, "The standard version of this symbol is a regular less-than sign." It actively converted the safe character into the dangerous U+003C (<) character.

step 3, The payload: The application output now contains a fully functioning, dangerous HTML script tag that will execute in a victim's browser.
*********************************

15. repeat(4) | returns new string which contains specified number of copies of this string.
16. toString () | converts to string.
