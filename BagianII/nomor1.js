const kelipatanSquare = (n) => {
  let dataAngka = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dataAngka += (i*j) + ' '
    }
    dataAngka += '\n'
  }
  return dataAngka
}