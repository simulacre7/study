# Throttle Pattern

## 핵심 아이디어
- 주기마다 최대 한 번만 실행하여 호출 빈도를 제한.
- 스크롤 핸들러, 마우스무브 추적, 버튼 연타 방지 등에 활용.

## 구현 예시 (TypeScript)
```ts
function throttle<T extends (...args: any[]) => void>(fn: T, interval = 200) {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = interval - (now - last);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      last = now;
      fn(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn(...args);
      }, remaining);
    }
  };
}
```

## 체크 포인트
- `leading`/`trailing` 옵션 처리 여부.
- 타이머 정리와 메모리 누수 방지.
