# Description

- 주민등록번호, 외국인등록번호의 유효성을 체크하는 Class 타입의 모듈입니다.
- new 연산자를 사용하여 인스턴스를 생성하신 후에 사용하실 수 있습니다.
- 유효성 Pass 여부를 true/false return 합니다.
- typescript 기반으로 작성되었습니다.

## Examples

```ts
import RegistrationValidator from '@beautifulstore/registration-number'

const IdValidator = new RegistrationValidator()
// RegistrationNumber (idNumber:String)

// result === true
const result = IdValidator.validateNative('6407131018433')

// result === true
const result = IdValidator.validateForeigner('9901015020063')
```

## Installation

```bash
npm install @beautifulstore/registration-number
```
