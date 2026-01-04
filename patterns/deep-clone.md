# Deep Clone Pattern

## 핵심 아이디어
- 중첩된 객체/배열을 새로운 참조로 복제해 원본 변형을 방지.

## 구현 메모
- JSON 직렬화는 날짜/함수/순환 참조를 처리하지 못함.
- 구조적 복사: `structuredClone`(브라우저/Node 17+), 성능/지원 범위 확인.
- 수동 재귀 시 순환 참조를 `WeakMap`으로 캐싱.

## 구현 예시 (TypeScript)
```ts
function deepClone<T>(input: T, cache = new WeakMap()): T {
  if (input === null || typeof input !== 'object') return input;
  if (cache.has(input as object)) return cache.get(input as object) as T;

  const result: any = Array.isArray(input) ? [] : {};
  cache.set(input as object, result);

  for (const [key, value] of Object.entries(input as any)) {
    result[key] = deepClone(value as any, cache);
  }

  return result as T;
}
```

## 체크 포인트
- `Date`, `Map`, `Set`, `RegExp`, 클래스 인스턴스 처리 여부.
- 원본 프로토타입 유지 필요 시 `Object.create` 사용.
