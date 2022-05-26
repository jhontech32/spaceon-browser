const statusColor = (text) => {
  switch (text) {
    case 'completed':
    case 'sent':
    case 'accept':
    case 'product':
      return '#493E3C'
    case 'money':
      return '#4CAF50'
    case 'pending':
    case 'send':
    case 'process':
    case 'retur':
      return '#FEBF35'
    case 'expired':
    case 'cancel':
      return '#E4202D'
    default:
      return '#757575'
  }
}

export default {
  // dark: {
  //   primaryColor: '#030303',
  //   primaryText: '#FFFFFF',
  //   primaryBackgroundColor: '#242424'
  // },
  // light: {
  //   primaryColor: '#f2f2f2',
  //   primaryText: '#242424',
  //   primaryBackgroundColor: '#f8f8f8'
  // },
  primaryColor: '#030303',
  AccentprimaryColor: '#242424',
  primaryColorTransparent: 'rgba(33, 33, 33, 0.8)',
  darkPrimaryColor: '#333333',
  lightPrimaryColor: '#836E6A',
  bgColor: '#f2f2f2',
  textIcons: '#FFFFFF',
  accentIcons: '#F0E9E9',
  primaryTextTransparent: 'rgba(33, 33, 33, 0.6)',
  iconTextTransparent: 'rgba(255, 255, 255, 0.8)',
  secondaryText: '#757575',
  dividerColor: '#D3D1D1',
  termColor: '#EEEEEE',
  primaryBackgroundColor: '#f8f8f8',
  errorColor: '#BC1B18',
  cottonColor: '#f1abb9',
  softPinkColor: '#f2e6e8',
  itemUnderline: '#c9c9c9',
  limeColor: '#50a329',
  successColor: '#1AB385',
  highlightColor: '#e2a03f',
  whiteCream: '#FCFCFC',
  starColor: '#FEBF35',
  goldColor: '#ffd700',
  cloudColor: '#e9f1f4',
  creamColor: '#FFEDCF',
  sweetColor: '#E1F2EA',
  berryColor: '#E7EBFF',
  smoothText: '#4C4E6A',
  priceText: '#FF6A6A',
  skyColor: '#c1d0f7',
  transparent: 'transparent',
  link: '#1A0DAB',
  statusColor
}
