function is_prime(n)
{
  for (var i = 2; i < n; i++)
    if (!(n % i))
      return (false);
  return (true);
}

function l_p_f(n)
{
  var f = 2;
  while(n != f)
    if(n % f == 0)
      n = n / f;
    else
      f++;
  return f;
}

console.log(l_p_f(600851475143));
