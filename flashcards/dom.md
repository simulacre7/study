# DOM & Browser Flashcards

- **리플로우 vs 리페인트**
  - 리플로우: 레이아웃 재계산. 리페인트: 시각적 업데이트.
  - 최적화: 클래스를 한 번에 변경, `requestAnimationFrame`, `transform` 활용.

- **이벤트 위임**
  - 원리: 상위 요소에 리스너 등록 후 이벤트 버블링 활용.
  - 장점: 성능 향상, 동적 요소 대응.

- **Layout Thrashing 방지**
  - 읽기/쓰기 분리: 읽기는 먼저, 쓰기는 모아서.
  - `getBoundingClientRect` 다중 호출 주의, `rAF` 배치.

- **렌더링 흐름**
  - JS → Style → Layout → Paint → Composite.
  - 체크: CSS 애니메이션 vs JS 애니메이션, `will-change` 남용 주의.

- **접근성 베이식**
  - 의미론적 태그, 포커스 관리, `aria-*` 최소 원칙, 대비/크기 준수.
