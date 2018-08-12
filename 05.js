function smallest()
{
  var i=20, j=0, d = 0;
  
  while (!d)
  {
    for(j = 1; j <= 20; j++)
    {
      if ((i % j))
        break;
      if (j == 20)
        return (i);
    }
    i++;
  }
}
console.log(smallest());
