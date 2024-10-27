function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

// -----------------------------------------------------------------------

/*

Time complexity

Lets make a recursive tree (e.g. for num = 4)

After balance out this tree with empty branches, we get:

            f(4)        --> 1 calls = 2^0
            /  \
          f(3)  f(2)    --> 2 calls = 2^1
          /  \  /  \
        f(2)  f(1) f(0) --> 4 calls = 2^2
        /  \
      f(1)  f(0)        --> 8 calls = 2^3

So, the equation will be: 2^0 + 2^1 + 2^2 + 2^3 ...... + 2^n (also known as Geometric Progression)

In mathematics, the solution for geometric progression is: 

                    [a * (r^n - 1)] / (1 - r)

where,  a is the starting value, 
        r is the common diffrence,
        n is the number of terms

Hence, 2^0 + 2^1 + 2^2 + 2^3 ...... + 2^n = [2^0 * (2^n - 1)] / (2 - 1)
                                
                                = (2^n - 1) / (2 - 1)
                                = 2^n - 1 (ignore const)
                                = 2^n
                                = 2^n * k

So, time complexity = O(2^n)

*/
