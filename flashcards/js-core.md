# JS Core Flashcards

- **클로저(Closure)**
  - 정의: 함수가 생성될 때의 렉시컬 환경을 기억해 외부 스코프 변수에 접근.
  - 활용: 데이터 은닉, 커링, 부분 적용.
  - 체크: `for` 루프에서 `let` vs `var`, 클로저로 상태 캡슐화.

- **this 바인딩 규칙**
  - 우선순위: `new` > 명시적(`call/apply/bind`) > 객체 메서드 호출 > 기본(`undefined` in strict / global in non-strict) > 화살표 함수(상위 스코프 캡처).
  - 체크: 이벤트 핸들러에서의 `this`, `bind`로 고정, 화살표 함수 주의.

- **프로토타입 체인**
  - 개념: 객체가 프로퍼티 조회 시 `[[Prototype]]`을 따라 올라가며 탐색.
  - 체크: `Object.create`, 클래스 상속, 메서드 공유로 메모리 절약.

- **모듈 시스템**
  - ES Modules: 정적 분석 가능, `import/export`, 트리 셰이킹 유리.
  - CommonJS: 런타임 로드, `require/module.exports`, Node 레거시 호환.

- **타입과 동등 비교**
  - 느슨한 비교(`==`): 암묵적 변환 발생 → 인터뷰에서는 지양.
  - 엄격 비교(`===`): 타입까지 비교.
  - 특이 케이스: `NaN !== NaN`, `Object.is`로 확인 가능.
