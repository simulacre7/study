# Event Emitter Pattern

## 핵심 아이디어
- 이벤트 등록/발행/제거를 통해 느슨한 결합을 제공.

## 간단 구현 (TypeScript)
```ts
type Handler<T = unknown> = (payload: T) => void;

type Events = Record<string, Handler[]>;

class EventEmitter {
  private events: Events = {};

  on<T = unknown>(event: string, handler: Handler<T>) {
    (this.events[event] ??= []).push(handler as Handler);
    return () => this.off(event, handler);
  }

  off<T = unknown>(event: string, handler: Handler<T>) {
    this.events[event] = (this.events[event] || []).filter(h => h !== handler);
  }

  emit<T = unknown>(event: string, payload: T) {
    (this.events[event] || []).forEach(handler => handler(payload));
  }
}
```

## 체크 포인트
- `once` 지원 여부, 에러 핸들링 전략.
- 리스너 호출 시 예외 전파/무시 정책.
