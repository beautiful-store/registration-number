export const RegistrationNumber = (idNumber: any, type: String) => {
  // idNumber : 주민번호 or 외국인 등록번호
  // type : NATIVE(내국인), FOREIGNER(외국인)

  if (idNumber.length !== 13) return false

  let checkSum = 0
  for (let i = 0; i < 12; i++)
    checkSum += (idNumber.substr(i, 1) >> 0) * ((i % 8) + 2)

  const nativeMatch =
    (11 - (checkSum % 11)) % 10 === Number(idNumber.substr(12, 1))
  const foreignerMatch =
    (13 - (checkSum % 11)) % 10 === Number(idNumber.substr(12, 1))

  if (type === 'NATIVE') return nativeMatch
  else if (type === 'FOREIGNER') return foreignerMatch
  else return false
}
