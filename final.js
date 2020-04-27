/******************************************************************************************************

	There are lots of cool ways to find primes, but most of the cools ones involve factorials.
	Factorials get obscenely large ridiculously fast. So large that our program quickly becomes
	unable to store them and do calculations with them accurately. For this reason I decided to use
	one of the less cool algorithms for finding primes:
								   THE SIEVE OF ERATOSTHENES
	In order to calculate primes with the Sieve Of Eratosthenes, we create a list of number starting
	at 2 up to n, then "mark out" all of those numbers that aren't prime. This gives us a list of
	primes up to the integer n. I was not totally honest when I said that this method of finding primes
	isn't cool. It is one of the fastest methods known.

*******************************************************************************************************/

function markOf(p, arr){
	//this function marks all multiples of p in an array, starting with p^2
	//values are marked by setting them to an arbitrary non prime number. I've chosen 1.
	var i = 0;
	var mark = p * p;

	while(mark <= arr.length){
		arr[mark - 1] = 1;
		i++;
		mark = p * (p + i);
	}

	return arr;
}

function findFirstGreater(p, arr){
	//this function finds the first number greater than p in arr
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > p) return arr[i];
	}
}

function primesUpTo(n){
	//first we make an array of numbers up to n
	var primes = [];

	for(var i = 1; i <= n; i++){
		primes.push(i);
	}

	//next we set p equal to the first prime number: 2
	var p = 2;

	//until there are no multiples of p left, keep marking numbers
	while(p * p <= primes.length){
		//mark all multiples of p
		primes = markOf(p, primes);
		//set p to the next biggest unmarked value
		p = findFirstGreater(p, primes);
	}

	//return the list of primes up to n with all the marked numbers removed
	function isNot1 (a){ return a != 1; }
	return primes.filter(isNot1);
}

function calculateAnswer(){
  //add up all the primes up to 1000
  var primes = primesUpTo(1000);
  var sum = 0;

  for(var i = 0; i < primes.length; i++){
  	sum += primes[i];
  }

  return sum;
}

// we check your answer by looking at the output var
var output = calculateAnswer();