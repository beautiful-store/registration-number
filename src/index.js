import React from 'react'
import PropTypes from 'prop-types'

const CURRENCY_POSITION_RIGHT = 'right'
const CURRENCY_POSITION_LEFT = 'left'

export const Money = ({ amount, currency, currencyPosition }) => {
  const getMoneyText = () => {
    if (typeof amount === 'number') {
      if (currencyPosition === CURRENCY_POSITION_RIGHT) {
        return (
          Number(amount).toLocaleString('ko-KR', { minimumFractionDigits: 0 }) +
          ' ' +
          currency
        )
      } else if (currencyPosition === CURRENCY_POSITION_LEFT) {
        return (
          currency +
          ' ' +
          Number(amount).toLocaleString('ko-KR', { minimumFractionDigits: 0 })
        )
      } else {
        return (
          Number(amount).toLocaleString('ko-KR', { minimumFractionDigits: 0 }) +
          ' ' +
          currency
        )
      }
    } else {
      return amount
    }
  }
  return <span>{getMoneyText()}</span>
}

Money.defaultProps = {
  currency: '원',
  currencyPosition: 'right'
}

Money.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  currencyPosition: PropTypes.oneOf([
    CURRENCY_POSITION_RIGHT,
    CURRENCY_POSITION_LEFT
  ])
}
