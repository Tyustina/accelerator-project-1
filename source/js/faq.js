const faqSection = document.querySelector('.faq');
const faqLists = faqSection.querySelectorAll('.faq__list');

faqLists.forEach(faqList => {
  const faqItems = faqList.querySelectorAll('.faq__item');

  faqItems.forEach(faqItem => {
    const faqAnswer = faqItem.querySelector('p');
    const faqBtn = faqItem.querySelector('.faq__button');

    faqAnswer.style.maxHeight = '0';
    faqAnswer.style.overflow = 'hidden';
    faqAnswer.style.transition = 'max-height 0.3s ease-out';

    faqBtn.addEventListener('click', () => {
      if (faqBtn.classList.contains('faq__button--closed')) {
        faqBtn.classList.remove('faq__button--closed');
        faqBtn.classList.add('faq__button--opened');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      } else {
        faqBtn.classList.remove('faq__button--opened');
        faqBtn.classList.add('faq__button--closed');
        faqAnswer.style.maxHeight = '0';
      }
    });
  });
});

const showFaq = (btn) => {

  const targetId = btn.dataset.targetId;
  const elFaqList = faqSection.querySelector(`.faq__list[data-id="${targetId}"]`);

  if (elFaqList) {
    const tabActive = faqSection.querySelector('.faq__tab--active');
    tabActive.classList.remove('faq__tab--active');
    const faqListActive = faqSection.querySelector('.faq__list--active');
    faqListActive.classList.remove('faq__list--active');
    btn.classList.add('faq__tab--active');
    elFaqList.classList.add('faq__list--active');
  }
}

faqSection.addEventListener('click', (e) => {
  if (!e.target.closest('.faq__tabs')) {
    return;
  }
  const btn = e.target.closest('.faq__tab');
  if (btn) {
    showFaq(btn);
  }
})



