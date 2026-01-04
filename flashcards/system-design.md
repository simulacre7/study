# Frontend System Design Flashcards

- **목표 명확화**
  - 사용 사례, 비기능 요건(성능, 접근성, 국제화, 보안)을 먼저 정리.

- **상태 관리 선택**
  - 로컬 vs 글로벌, 서버 상태 vs 클라이언트 상태 구분.
  - 도구: Context + Reducer, Zustand/Recoil, Query 계열.

- **캐싱 전략**
  - HTTP 캐시 헤더, SW 프리캐싱, IndexedDB/LocalStorage 적절 사용.
  - 무효화: 버전 태깅, Stale-While-Revalidate 패턴.

- **성능/전달**
  - 번들 분할, 코드 스플리팅, 이미지 최적화, Critical CSS, Prefetch/Preload.
  - RUM/성능 모니터링: TTFB, FCP, LCP, CLS, INP.

- **장애 대응**
  - 페일오버 UI, 네트워크 복원력(재시도/백오프), 로그/옵저버빌리티 계획.
