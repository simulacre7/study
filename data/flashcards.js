window.FLASHCARDS = [
  {
    topic: 'JS Core',
    question: '클로저(Closure)는 무엇이며 어떤 상황에서 유용한가요?',
    answer:
      '<ul><li>함수가 선언될 때의 렉시컬 환경을 기억해 외부 스코프 변수에 접근.</li><li>데이터 은닉, 커링, 부분 적용 등에서 사용.</li><li>루프에서 <code>var</code> 대신 <code>let</code> 사용 여부가 결과에 영향.</li></ul>',
    tags: ['closure', 'scope', 'js'],
  },
  {
    topic: 'JS Core',
    question: 'this 바인딩 우선순위를 설명해보세요.',
    answer:
      '<ol><li><strong>new</strong></li><li><strong>명시적</strong>: call/apply/bind</li><li><strong>암시적</strong>: 객체 메서드 호출</li><li><strong>기본</strong>: strict는 undefined, non-strict는 global</li><li><strong>화살표</strong>: 상위 스코프 캡처</li></ol>',
    tags: ['this', 'binding', 'js'],
  },
  {
    topic: 'DOM',
    question: '리플로우와 리페인트 차이와 최적화 방법은?',
    answer:
      '<ul><li>리플로우: 레이아웃 재계산, 리페인트: 시각적 업데이트.</li><li>최적화: 클래스를 한 번에 변경, <code>requestAnimationFrame</code>으로 배치, <code>transform</code> 활용.</li></ul>',
    tags: ['rendering', 'performance'],
  },
  {
    topic: 'DOM',
    question: '이벤트 위임(Event Delegation)의 원리와 장점은?',
    answer:
      '<ul><li>버블링을 활용해 상위 요소에 리스너 등록.</li><li>동적 요소 대응, 성능 향상.</li></ul>',
    tags: ['event', 'delegation'],
  },
  {
    topic: 'Async',
    question: '이벤트 루프에서 Promise와 setTimeout의 실행 순서를 설명하세요.',
    answer:
      '<p><code>Promise.then</code>은 마이크로태스크, <code>setTimeout</code>은 매크로태스크 큐. 콜스택 → 마이크로태스크 → 렌더 → 매크로태스크 순.</p>',
    tags: ['event loop', 'promise'],
  },
  {
    topic: 'Async',
    question: 'async/await로 병렬 실행을 구현하는 방법은?',
    answer:
      '<p><code>await Promise.all([task1(), task2()])</code>처럼 Promise를 미리 생성 후 한 번에 await.</p>',
    tags: ['async', 'parallel'],
  },
  {
    topic: 'System Design',
    question: 'Frontend 성능 모니터링에서 핵심 지표를 나열해보세요.',
    answer: '<p>TTFB, FCP, LCP, CLS, INP 등 RUM 지표를 추적.</p>',
    tags: ['performance', 'rum'],
  },
  {
    topic: 'System Design',
    question: '서비스 워커를 활용한 캐싱 전략은 무엇이 있나요?',
    answer:
      '<ul><li>프리캐싱: 필수 자산 사전 캐싱</li><li>런타임 캐싱: SWR, 캐시 우선, 네트워크 우선 등 정책</li><li>버전 태깅으로 무효화 관리</li></ul>',
    tags: ['service worker', 'caching'],
  },
];
