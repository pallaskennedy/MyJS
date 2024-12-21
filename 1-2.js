"use strict";
/* 1.2 Apply JavaScript best practices 
• Comments, indentation, naming conventions, noscript, constants, reserved  
keywords, debugger keyword, setting breakpoints, console.log 
 */

// Comments
/* 	Best Practices:
	•	Use comments sparingly and only when necessary.
	•	Avoid redundant comments that merely restate the code. 
    •	Use variable names that make code readable and reduce the need for comments. */

// Indentation
/* 	•	Best Practices:
	•	Use 2 or 4 spaces per indentation level (not tabs, unless agreed upon).
	•	Follow the style guide of your team or project. */

// Naming Conventions
/* 	Best Practices:
	•	camelCase for variables
    •	camelCase for functions
    •	UPPER_SNAKE_CASE for constants 
    •	avoid using reserved keywords for naming */

//No Script Tag
/*  •	Put head and/or the body of the html file.
    •	Provide fallback content for users with JavaScript disabled. */

//Constants
// Fo variables that should not be reassigned later
const PI = 3.14159; // Const declaration prevents reassignment
console.log(PI);
//PI = 3;  // this throws an error in JavaScript
console.log(PI);
