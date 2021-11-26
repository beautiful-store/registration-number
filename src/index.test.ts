import RegistrationValidator from './index'

const IdValidator = new RegistrationValidator()

describe('주민번호체크', () => {
  it('주민등록번호 테스트', () => {
    const result = IdValidator.validateNative('6407131018433')
    expect(result).toBe(true)
  })
  it('주민등록번호 테스트 - 잘못된 번호를 넣었을 떄', () => {
    const result = IdValidator.validateNative('9901015020063')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 더 긴 번호를 넣었을 때', () => {
    const result = IdValidator.validateNative('99010150200631111')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 더 짧은 번호를 넣었을 때', () => {
    const result = IdValidator.validateNative('990101502')
    expect(result).toBe(false)
  })
  it('주민등록번호 테스트 - 맞는 외국인등록번호 입력 시', () => {
    const result = IdValidator.validateNative('9901015020063')
    expect(result).toBe(false)
  })
})

describe('외국인등록번호 체크', () => {
  it('외국인등록번호 테스트', () => {
    const result = IdValidator.validateForeigner('9901015020063')
    expect(result).toBe(true)
  })
  it('외국인등록번호 테스트 - 잘못된 번호를 넣었을 때', () => {
    const result = IdValidator.validateForeigner('6407131018433')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 더 긴 번호를 넣었을 때', () => {
    const result = IdValidator.validateForeigner('6407131018433111111')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 더 짧은 번호를 넣었을 때', () => {
    const result = IdValidator.validateForeigner('6407131')
    expect(result).toBe(false)
  })
  it('외국인등록번호 테스트 - 맞는 주민등록번호 입력 시', () => {
    const result = IdValidator.validateForeigner('6407131018433')
    expect(result).toBe(false)
  })
})
