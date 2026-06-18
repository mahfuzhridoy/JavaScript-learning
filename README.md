# JavaScript-learning
Javascript learning path

This is not beginners path. this tutorials or codes can help a person who already knows basics of programming.



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
