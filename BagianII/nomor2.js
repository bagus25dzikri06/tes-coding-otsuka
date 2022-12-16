const uangPecahan = (n) => {
  console.log('Jumlah uang Rp 100000: ' + Math.floor(n / 100000))
  console.log('Jumlah uang Rp 50000: ' + Math.floor((n % 100000) / 50000))
  console.log('Jumlah uang Rp 20000: ' + Math.floor((n % 100000) % 50000 / 20000))
  console.log('Jumlah uang Rp 10000: ' + Math.floor((n % 100000) % 50000 % 20000 / 10000))
  console.log('Jumlah uang Rp 5000: ' + Math.floor((n % 100000) % 50000 % 20000 % 10000 / 5000))
  console.log('Jumlah uang Rp 2000: ' + Math.floor((n % 100000) % 50000 % 20000 % 10000 % 5000 / 2000))
  console.log('Jumlah uang Rp 1000: ' + Math.floor((n % 100000) % 50000 % 20000 % 10000 % 5000 % 2000 / 1000))
}