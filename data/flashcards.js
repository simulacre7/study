window.FLASHCARDS = [
  {
    topic: 'Pagination / Feed',
    question: '뉴스피드에서 page-number 기반 페이징이 부적합한 이유는?',
    answer:
      '<ul><li>새 글 추가/삭제로 OFFSET 기준이 흔들려 중복 또는 누락이 발생.</li><li>OFFSET이 커질수록 DB 성능이 급격히 저하.</li></ul>',
    tags: ['pagination', 'offset', 'feed'],
  },
  {
    topic: 'Pagination / Feed',
    question: 'Cursor 기반 페이징의 핵심 아이디어는?',
    answer:
      '<p>페이지 번호가 아니라 <strong>마지막으로 본 아이템 이후</strong>를 기준으로 데이터를 가져온다.</p>',
    tags: ['pagination', 'cursor'],
  },
  {
    topic: 'Pagination / Feed',
    question: 'Cursor에는 보통 어떤 값이 들어가나?',
    answer: '<p><code>createdAt + id</code> 같은 정렬 기준 컬럼 조합.</p>',
    tags: ['cursor', 'key'],
  },
  {
    topic: 'Pagination / Feed',
    question: 'Cursor 페이징이 무한 스크롤에 특히 적합한 이유는?',
    answer:
      '<ul><li>리스트가 동적으로 변해도 정합성 유지.</li><li>인덱스를 활용해 성능이 안정적.</li></ul>',
    tags: ['infinite scroll', 'pagination'],
  },
  {
    topic: 'Pagination / Feed',
    question: 'Cursor 페이징의 단점은?',
    answer:
      '<ul><li>특정 페이지로 점프하기 어렵다.</li><li>이전 페이지로 돌아가는 UX가 까다롭다.</li></ul>',
    tags: ['cursor', 'ux'],
  },
  {
    topic: 'Infinite Scroll / Virtualization',
    question: 'Infinite scroll에서 scroll 이벤트 대신 Intersection Observer를 쓰는 이유는?',
    answer:
      '<p>브라우저 최적화가 되어 있고 scroll 이벤트보다 성능이 좋기 때문이다.</p>',
    tags: ['infinite scroll', 'intersection observer'],
  },
  {
    topic: 'Infinite Scroll / Virtualization',
    question: 'List Virtualization이 필요한 이유는?',
    answer:
      '<p>DOM 노드가 너무 많아지면 렌더링/메모리 성능이 급격히 떨어지기 때문이다.</p>',
    tags: ['virtualization', 'performance'],
  },
  {
    topic: 'Infinite Scroll / Virtualization',
    question: 'List Virtualization의 핵심 개념은?',
    answer:
      '<p>보이는 영역만 렌더링하고, 나머지는 공간만 유지하는 슬라이딩 윈도우 방식.</p>',
    tags: ['virtualization', 'windowing'],
  },
  {
    topic: 'Realtime Update / SSE',
    question: 'SSE(Server-Sent Events)란 무엇인가?',
    answer:
      '<p>클라이언트가 서버에 HTTP 연결을 열어두고, 서버가 이벤트를 스트리밍으로 푸시하는 방식.</p>',
    tags: ['sse', 'realtime'],
  },
  {
    topic: 'Realtime Update / SSE',
    question: 'SSE와 polling의 가장 큰 차이점은?',
    answer:
      '<p>polling은 클라이언트가 주기적으로 요청하고, SSE는 서버가 주도적으로 전송한다.</p>',
    tags: ['sse', 'polling'],
  },
  {
    topic: 'Realtime Update / SSE',
    question: 'SSE가 WebSocket보다 단순한 이유는?',
    answer:
      '<p>단방향(server → client)이고 브라우저 기본 API(EventSource)를 제공한다.</p>',
    tags: ['sse', 'websocket'],
  },
  {
    topic: 'Realtime Update / SSE',
    question: '뉴스피드에서 새 글을 바로 렌더링하지 않는 이유는?',
    answer:
      '<p>스크롤 중 UI가 튀는 문제를 방지하기 위해 “새 글 있음” 알림 후 유저 액션으로 갱신한다.</p>',
    tags: ['ux', 'realtime'],
  },
  {
    topic: 'Realtime Update / SSE',
    question: '여러 서버 환경에서 SSE 이벤트를 브로드캐스트하려면 무엇이 필요한가?',
    answer: '<p>Redis pub/sub 같은 중앙 메시지 브로커.</p>',
    tags: ['sse', 'pubsub'],
  },
  {
    topic: 'CDN / Load Balancer',
    question: 'Static 서버 앞에 Load Balancer 대신 CDN을 두는 이유는?',
    answer:
      '<p>CDN이 이미 글로벌 로드밸런싱, 캐싱, 장애 우회를 수행하기 때문이다.</p>',
    tags: ['cdn', 'load balancer'],
  },
  {
    topic: 'CDN / Load Balancer',
    question: 'CDN은 로드밸런서인가?',
    answer:
      '<p>기능적으로는 맞지만, 개념적으로는 로드밸런서를 포함하는 상위 개념이다.</p>',
    tags: ['cdn', 'lb'],
  },
  {
    topic: 'CDN / Load Balancer',
    question: 'API 서버 앞에는 왜 CDN 대신 LB를 두는가?',
    answer:
      '<p>API는 캐시가 어렵고 상태/트랜잭션/비즈니스 로직 처리가 필요하기 때문이다.</p>',
    tags: ['api', 'lb'],
  },
  {
    topic: 'Database Read / Write 분리',
    question: 'DB read/write 분리 구조의 일반적인 명칭은?',
    answer: '<p>Primary–Replica architecture (또는 Read/Write splitting).</p>',
    tags: ['database', 'replica'],
  },
  {
    topic: 'Database Read / Write 분리',
    question: 'DB 앞의 “로드밸런서”는 실제로 무엇인가?',
    answer:
      '<p>SQL을 분석해 read는 replica, write는 primary로 라우팅하는 DB proxy.</p>',
    tags: ['database', 'proxy'],
  },
  {
    topic: 'Database Read / Write 분리',
    question: 'DB를 서버처럼 무한히 늘릴 수 없는 이유는?',
    answer: '<p>DB는 상태(state)를 가지며 데이터 정합성이 필요하기 때문이다.</p>',
    tags: ['database', 'scalability'],
  },
  {
    topic: 'Media Upload',
    question: '포스트 생성과 미디어 업로드를 분리하는 이유는?',
    answer:
      '<p>업로드는 느리고 실패 가능성이 높아, UX와 시스템 안정성을 위해 분리한다.</p>',
    tags: ['upload', 'ux'],
  },
  {
    topic: 'Media Upload',
    question: '업로드 전에 mediaId를 먼저 발급하는 이유는?',
    answer:
      '<p>mediaId는 파일이 아니라 미디어 리소스(메타+상태)를 식별하기 때문이다.</p>',
    tags: ['media', 'id'],
  },
  {
    topic: 'Media Upload',
    question: 'Pre-signed URL 방식의 업로드 흐름은?',
    answer:
      '<ol><li><code>media/init</code>으로 <code>mediaId</code>와 <code>uploadUrl</code> 발급</li><li>클라이언트가 S3에 직접 업로드</li><li>업로드 완료 알림</li><li>게시글 생성 시 <code>mediaId</code> 참조</li></ol>',
    tags: ['presigned url', 'upload'],
  },
  {
    topic: 'Media Upload',
    question: '업로드 중/후 미디어는 어떤 상태를 가질 수 있나?',
    answer:
      '<p>INIT → UPLOADING → UPLOADED → PROCESSING → READY / FAILED</p>',
    tags: ['upload', 'state'],
  },
  {
    topic: 'Media Upload',
    question: '비디오 업로드 후 “처리 중” 상태가 필요한 이유는?',
    answer:
      '<p>트랜스코딩/썸네일 생성 등 비동기 후처리가 필요하기 때문이다.</p>',
    tags: ['video', 'processing'],
  },
  {
    topic: 'UX / Optimistic UI',
    question: 'Optimistic UI란 무엇인가?',
    answer:
      '<p>서버 응답 전에 UI를 먼저 업데이트하고, 실패 시 롤백하는 방식.</p>',
    tags: ['optimistic ui', 'ux'],
  },
  {
    topic: 'UX / Optimistic UI',
    question: '좋아요 버튼에 Optimistic UI가 적합한 이유는?',
    answer:
      '<p>실패 확률이 낮고, 즉각적인 피드백이 UX에 중요하기 때문이다.</p>',
    tags: ['optimistic ui', 'likes'],
  },
];
