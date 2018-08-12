function is_pal(x) {
    var pal = parseInt(x.toString().split('').reverse().join(''));
    if (pal === x)
        return true;
    else
        return false;
}

function l_pal()
{
  var i, j, p, m = 0;

  for (i = 100; i <= 999; i++)
  {
    for (j = i; j <= 999; j++)
    {
      p = i * j;
      if (is_pal(p))
      {
        if( m < p )
        {
          m = p;
        }
      }
    }
  }
  return m;
}

console.log(l_pal())
