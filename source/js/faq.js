const faqList = document.querySelector('.faq__list');
const faqItems = faqList.querySelectorAll('.faq__item');

faqItems.forEach(faqItem => {
  const faqAnswer = faqItem.querySelector('p');
  const faqBtn = faqItem.querySelector('.faq__button');
  faqAnswer.style.maxHeight = '0';
  faqAnswer.style.overflow = 'hidden';
  faqAnswer.style.transition = 'max-height 0.3s ease-out';

  faqBtn.addEventListener('click', ()=>{
    if(faqBtn.classList.contains('faq__button--closed')) {
      faqBtn.classList.remove('faq__button--closed');
      faqBtn.classList.add('faq__button--opened');
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
    }else{
      faqBtn.classList.remove('faq__button--opened');
      faqBtn.classList.add('faq__button--closed');
      faqAnswer.style.maxHeight = '0';
    }
  })
})



