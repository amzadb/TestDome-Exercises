// Math Expression
// You are working on a calculator application where users can input 
// a mathematical expression such as: (3 + 5) * (2 - 4).
// To correctly evaluate this expression, the application needs 
// to validate the expression and ensure that the parentheses are balanced. 
// The balanced parentheses are crucial for determining the order of operations and 
// evaluating the expression correctly.
// You have used an AI assistant to generate the following function 
// to check if the parentheses in an expression are balanced:

function isBalanced(parentheses: string): boolean {
	const stack: Array<String> = [];
	const opening: Set<String> = new Set(['(', '[', '{']);
	const closing: Set<String> = new Set([')', ']', '}']);
	const pairs: Record<string, string> = {
	        ')': '(',
		']': '[',
		'}': '{'
	};

	for (const c of parentheses) {
		if (opening.has(c)) {
			stack.push(c);
		} else if (closing.has(c)) {
			if (stack.length === 0 || stack[stack.length - 1] !== pairs[c]) {
				return false;
			}
			stack.pop();
		}
	}
	
	return stack.length === 0;
}

// What is correct for the given function?
// Select all acceptable answers.

// A. The function will both, validate an expression, 
// and report the reason for any errors encountered.

// B. The function will return false for an expression
// having mathematical operators without different precedence.

// C. The function will work correctly if Set(s) are removed and
// the pairs object is used instead of them.

// D. Using if...else, instead of a Set<String> and pairs record to check 
// for brackets in the loop reduces the number of 
// code changes needed to handle new bracket types.

// E. The function will work correctly if the expression is made up of
// numbers and mathematical operators.

// F. The function will iterate through the entire string for expressions
// like "[3 + 5 x (4-1] - 39]".

// Answer: C, E