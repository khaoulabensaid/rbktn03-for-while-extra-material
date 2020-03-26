// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.

function sum(array){
	var result= 0;
	for (var i= 0; i<=array.length; i++){
		result+= i;
	}
	return result;
}
function sum(array){
	var i=0;
	var result= 0;
	while (i<=array.length){
		result+= i;
		i++;
	}
	return result;
}

// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function max(array){
	var number= array[0];
	var  num1;
	for (var i=0; i < array.length; i++){
		num1= array[i];
		number = Math.max(number, num1);
	}
	return number;
}

function max(array){
	var number= array[0];
	var  num1;
	var i=0;
	while ( i < array.length){
		num1= array[i];
		 i++;
		number = Math.max(number, num1);
	}
	return number;
}



// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.

function longestWord(string){
	var array= string.split(' ');
	var str1 =[];
	var str = array[0];
	
	for (var i=0; i< array.length; i++){
		
		if (array[i].length >= str1.length){
          str1= array[i];
		}
		
	}
	return str1;
}

function longestWord(string){
	var array= string.split(' ');
	var str1= [];
	var str = array[0];
	var i= 0;
	while (i< array.length){
		if (array[i].length>=str1.length){
          str1= array[i];
	}
	i++;
}
	return str1;
}


// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

// function remove(array, element) {
//  // your code here
//  }
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]

function remove(array, element){

	var newArray;

	for (var i=0; i< array.length; i++){
		if(array[i] === element){
			newArray = array.splice(i, 1);
		}
	}
	return array;
}

function remove(array, element){
	var i= 0;
	var newArray;
	while (i < array.length){
		if(array[i] === element){
			newArray = array.splice(i, 1);
		}
		i++;
	}
	return array;
}

// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.

function evens(array){
	var newArray= [];
	for (var i = 0; i < array.length; i++){
		if (array[i]%2 === 0){
			newArray === newArray.push(array[i]);

		}
	}
   return newArray;
}

function evens(array){
	var newArray= [];
	var i= 0;
	while(i < array.length){
		if (array[i]%2 === 0){
			newArray === newArray.push(array[i]);
		}
		i++;
	}
	return newArray;
}

// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.



// 2. Write a function called min that finds the smallest number in an array of numbers.

function min(array){
	var num1= array[0];
	var num2;
	for (var i = 0; i< array.length; i++){
		num2= array[i]
		num1= Math.min(num1, num2);
	}
 return num1;
}

function min(array){
	var num1= array[0];
	var num2;
	var i= 0;
	while (i<array.length){
		num2= array[i];
		num1= Math.min(num1, num2);
		i++;
	}
	return num1;
}

// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWord(string){
	var array= string.split(' ');
	var str1;
	var str= array[0];
	for (var i= 0; i < array.length; i++){
		if(array[i].length < str.length){
			str1 = array[i];
		}
	}
	return str1;
}

function shortestWord(string){
	var array= string.split(' ');
	var str1;
	var str= array[0];
	var i = 0;
	while (i < array.length){
		if (array[i].length <= str.length){
			str1= array[i];
		}
		i++;
	}
	return str1;
}	


// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.

// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.

// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
