const currencyFormatter = (currency) => {
  if (typeof currency === 'string' || typeof currency === 'number') {
    return `${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace(/\.00$/, '')}`
  }
  return '0'
}

const numericFormatter = (number) => {
  if (typeof number === 'string' || typeof number === 'number') {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace(/\.00$/, '')}`
  }
  return '0'
}

const countFollower = (number) => {
  if (number >= 1000000000) {
    return `${(number / 1000000000).toFixed(1).replace(/\.0$/, '')}M`
  }
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1).replace(/\.0$/, '')}jt`
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1).replace(/\.0$/, '')}rb`
  }
  return number
}

const composeData = (id, value) => {
  return ({ id, value })
}

export {
  currencyFormatter,
  numericFormatter,
  countFollower,
  composeData
}
