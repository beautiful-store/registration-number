export default class RegistrationValidator {
  // idNumber : 주민번호 or 외국인 등록번호

  validateNative = (idNumber: string): any => {
    this.checkingLength(idNumber)
    const checkSum = this.checkingSum(idNumber)
    const nativeMatch =
      (11 - (checkSum % 11)) % 10 === Number(idNumber.substr(12, 1))
    return nativeMatch
  }

  validateForeigner = (idNumber: string): any => {
    this.checkingLength(idNumber)
    const checkSum = this.checkingSum(idNumber)
    const foreignerMatch =
      (13 - (checkSum % 11)) % 10 === Number(idNumber.substr(12, 1))
    return foreignerMatch
  }

  checkingSum = (idNumber: any): number => {
    this.checkingLength(idNumber)
    let checkSum = 0
    for (let i = 0; i < 12; i++)
      checkSum += (idNumber.substr(i, 1) >> 0) * ((i % 8) + 2)
    return checkSum
  }

  checkingLength = (idNumber: any): any => {
    if (idNumber.length !== 13) return false
  }
}
