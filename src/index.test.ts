import { RegistrationNumber } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('주민번호체크', () => {
  it('주민등록번호 테스트', () => {
    const result = RegistrationNumber('6407131018433', 'NATIVE')
    expect(result).toBe(true)
  })
  it('주민등록번호 테스트 - 잘못된 번호를 넣었을 떄', () => {
    const result = RegistrationNumber('9901015020063', 'NATIVE')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 더 긴 번호를 넣었을 때', () => {
    const result = RegistrationNumber('99010150200631111', 'NATIVE')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 더 짧은 번호를 넣었을 때', () => {
    const result = RegistrationNumber('990101502', 'NATIVE')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 맞는 주민번호, FOREIGNER 입력 시', () => {
    const result = RegistrationNumber('6407131018433', 'FOREIGNER')
    expect(result).toBe(false)
  })
})

describe('외국인등록번호 체크', () => {
  it('외국인등록번호 테스트', () => {
    const result = RegistrationNumber('9901015020063', 'FOREIGNER')
    expect(result).toBe(true)
  })
  it('외국인등록번호 테스트 - 잘못된 번호를 넣었을 때', () => {
    const result = RegistrationNumber('6407131018433', 'FOREIGNER')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 더 긴 번호를 넣었을 때', () => {
    const result = RegistrationNumber('6407131018433111111', 'FOREIGNER')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 더 짧은 번호를 넣었을 때', () => {
    const result = RegistrationNumber('6407131', 'FOREIGNER')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 맞는 외국인등록번호, NATIVE 입력 시', () => {
    const result = RegistrationNumber('9901015020063', 'NATIVE')
    expect(result).toBe(false)
  })
})
