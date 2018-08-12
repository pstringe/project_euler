function fib_add_even(n)
{
  var a = 1;
  var b = 2;
  var swap = 0;
  var sum = b;
  
  while (a < n)
  {
    swap = b;
    b += a;
    a = swap;
    if (!(a % 2))
      sum += a;
  }
  return (sum);
}
console.log(fib_add_even(4000000));
