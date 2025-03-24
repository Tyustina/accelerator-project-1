const tabsList = document.querySelector('.price');

const showTab = (btn) => {
  if (btn.classList.contains('price__tab--active')) {
    return;
  }

  const targetId = btn.dataset.targetId;
  const elTabList = tabsList.querySelector(`.price__list[data-id="${targetId}"]`);
  if (elTabList) {
    const tabActive = tabsList.querySelector('.price__tab--active');
    tabActive.classList.remove('price__tab--active');
    const tabListActive = tabsList.querySelector('.price__list--active');
    tabListActive.classList.remove('price__list--active');
    btn.classList.add('price__tab--active');
    elTabList.classList.add('price__list--active');
  }
};

tabsList.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.price__tabs')) {
    return;
  }

  const btn = e.target.closest('.price__tab');
  showTab(btn);
});
