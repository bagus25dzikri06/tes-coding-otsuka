const joinArr = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    for (let i = 0; i < b.length; i++) {
      a.push(b[i])
    }
    return a
  } else {
    return 'Nilai yang dimasukkan harus berupa array'
  }
}