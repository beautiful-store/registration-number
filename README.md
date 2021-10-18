# Description

- 주민등록번호, 외국인등록번호의 유효성을 체크하는 Function입니다.<br/>
- 유효성 Pass 여부를 true/false return 합니다.
- typescript 기반으로 작성되었습니다.

## Examples

```ts
import { RegistrationNumber } from '.'

// RegistrationNumber (idNumber:String, type:String)

// result === true
const result = RegistrationNumber('6407131018433', 'NATIVE')

// result === true
const result = RegistrationNumber('9901015020063', 'FOREIGNER')
```

## Installation

```bash
npm install @beautifulstore/registration-number
```
