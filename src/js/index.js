document.querySelector('.tooltip__icon').addEventListener('click', function () {
  const tooltip = this.parentElement;

  tooltip.classList.toggle('tooltip--active');
  tooltip.parentElement.classList.toggle('tooltip-container--active');
});
