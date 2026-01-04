# Async Flashcards

- **이벤트 루프 단계**
  - 콜스택 → 마이크로태스크(Promise) → 렌더 → 매크로태스크(setTimeout 등).
  - 체크: `Promise.then` vs `setTimeout` 실행 순서.

- **Promise 체이닝**
  - 반환값이 프로미스면 플랫하게 연결됨.
  - 에러는 가장 가까운 `catch`로 전파.

- **async/await**
  - `await`는 프로미스를 일시 중단 후 재개.
  - 병렬 처리: `await Promise.all([...])`.
  - 에러 핸들링: `try/catch` 또는 `.catch`, 취소는 AbortController.

- **비동기 제어 패턴**
  - 타임아웃 래핑, 리트라이 with 백오프, 큐/세마포어로 동시성 제한.

- **Fetch 주의점**
  - 4xx/5xx도 `reject` 아님 → 상태 체크 필요.
  - 타임아웃 직접 구현, JSON 파싱 에러 분리.
