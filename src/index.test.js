import React from 'react'
import { Money } from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('금액 테스트', () => {
  it('세 자리 테스트', () => {
    const { getByText } = render(<Money amount={1000} />)
    const titleElement = getByText('1,000 원')
    expect(titleElement).toBeInTheDocument()
  })
  it('여섯 자리 테스트', () => {
    const { getByText } = render(<Money amount={1000000} />)
    const titleElement = getByText('1,000,000 원')
    expect(titleElement).toBeInTheDocument()
  })
  it('두 자리 테스트', () => {
    const { getByText } = render(<Money amount={100} />)
    const titleElement = getByText('100 원')
    expect(titleElement).toBeInTheDocument()
  })
})

describe('잘못된 파라미터 케이스', () => {
  it('한글 테스트', () => {
    const { getByText } = render(<Money amount='테스트' />)
    const titleElement = getByText('테스트')
    expect(titleElement).toBeInTheDocument()
  })
})

describe('currency 테스트', () => {
  it('currency 없는 경우', () => {
    const { getByText } = render(<Money amount={1000} />)
    const titleElement = getByText('1,000 원')
    expect(titleElement).toBeInTheDocument()
  })
  it('currency 있는 경우', () => {
    const { getByText } = render(<Money amount={1000} currency='₩' currencyPosition="left" />)
    const titleElement = getByText('₩ 1,000')
    expect(titleElement).toBeInTheDocument()
  })
  it('currencyPosition 값이 이상한 경우', () => {
    const { getByText } = render(<Money amount={1000} currency='₩' currencyPosition="center" />)
    const titleElement = getByText('1,000 ₩')
    expect(titleElement).toBeInTheDocument()
  })
})
