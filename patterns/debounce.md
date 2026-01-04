# Debounce Pattern

## 핵심 아이디어
- 짧은 시간 동안 반복 호출되는 함수를 하나로 합쳐 마지막 호출 이후 지정된 지연 후 실행.
- 검색 자동완성, 리사이즈 이벤트 최적화 등에 사용.

## 구현 예시 (TypeScript)
```ts
function debounce<T extends (...args: any[]) => void>(fn: T, delay = 200) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

## 체크 포인트
- 즉시 실행 옵션 필요 여부(`leading`), 취소 메서드 제공 여부.
- `this` 바인딩이 필요한 경우 `fn.apply` 사용.
