import React from 'react'

import { Money } from 'money'

const App = () => {
  return <Money amount={10000000} currency='₩' currencyPosition="left" />
}

export default App
