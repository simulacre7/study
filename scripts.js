(() => {
  const cardsEl = document.getElementById('cards');
  const topicSelect = document.getElementById('topic-filter');
  const searchInput = document.getElementById('search-input');
  const cardCountEl = document.getElementById('card-count');
  const template = document.getElementById('card-template');

  let cards = window.FLASHCARDS || [];

  const topics = Array.from(new Set(cards.map(c => c.topic)));
  topics.sort();
  topics.forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });

  function render(list) {
    cardsEl.innerHTML = '';

    if (!list.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = '카드가 없습니다. 검색어나 필터를 조정해보세요.';
      cardsEl.appendChild(empty);
      cardCountEl.textContent = '총 0개 카드';
      return;
    }

    cardCountEl.textContent = `총 ${list.length}개 카드`;

    list.forEach(card => {
      const node = template.content.firstElementChild.cloneNode(true);
      const article = node;
      const qEl = node.querySelector('.card-question');
      const topicEl = node.querySelectorAll('.card-topic');
      const answerEl = node.querySelector('.card-answer');
      const tagsEl = node.querySelector('.card-tags');

      topicEl.forEach(el => (el.textContent = card.topic));
      qEl.textContent = card.question;
      answerEl.innerHTML = card.answer;
      tagsEl.textContent = card.tags?.length ? card.tags.map(tag => `#${tag}`).join(' ') : '';

      const toggle = () => {
        const pressed = article.getAttribute('aria-pressed') === 'true';
        article.setAttribute('aria-pressed', String(!pressed));
      };

      article.addEventListener('click', toggle);
      article.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      cardsEl.appendChild(node);
    });
  }

  function filterCards() {
    const topicValue = topicSelect.value;
    const keyword = searchInput.value.trim().toLowerCase();

    const filtered = cards.filter(card => {
      const matchesTopic = topicValue === 'all' || card.topic === topicValue;
      const haystack = `${card.question} ${card.answer} ${(card.tags || []).join(' ')}`.toLowerCase();
      const matchesKeyword = !keyword || haystack.includes(keyword);
      return matchesTopic && matchesKeyword;
    });

    render(filtered);
  }

  topicSelect.addEventListener('change', filterCards);
  searchInput.addEventListener('input', filterCards);

  render(cards);
})();
