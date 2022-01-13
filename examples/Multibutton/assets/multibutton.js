function ednaMultiButton(options) {
  function onChatButtonClick(e) {
    e && e.preventDefault();

    container.classList.add(hideClass);
    ThreadsWidget.showChat();
    onButtonClick();
  }

  function onButtonClick(e) {
    e && e.preventDefault();

    const isActive = button.classList.contains(activeClass);

    isActive ? topButtons.classList.add(hideClass) : topButtons.classList.remove(hideClass);
    isActive ? leftButtons.classList.add(hideClass) : leftButtons.classList.remove(hideClass);
    button.classList.toggle(activeClass);
  }

  const buttonClass = 'ednamb-button';
  const topButtonsClass = 'ednamb-top-buttons';
  const leftButtonsClass = 'ednamb-left-buttons';
  const hideClass = 'ednamb-hide';
  const activeClass = 'ednamb-active';
  const containerId = options.containerId || 'ednamb-container';
  const leftButtonsList = options.leftButtons || [];
  const topButtonsList = options.topButtons || [];
  const container = document.getElementById(containerId);
  const button = container.querySelector('.' + buttonClass);
  const topButtons = container.querySelector('.' + topButtonsClass);
  const leftButtons = container.querySelector('.' + leftButtonsClass);

  button.addEventListener('click', onButtonClick);

  topButtonsList.forEach(function (item) {
    const a = document.createElement('a');

    a.href = item.url;
    a.textContent = item.text;
    a.classList.add('ednamb-top-button');
    topButtons.appendChild(a);
  });

  leftButtonsList.forEach(function (item) {
    const a = document.createElement('a');

    a.style.backgroundImage = 'url("' + item.image + '")';
    a.classList.add('ednamb-left-button');

    if (item.url) {
      a.href = item.url;
      a.target = '_blank';
    } else {
      a.href = '#';
      a.addEventListener('click', onChatButtonClick);
    }

    leftButtons.appendChild(a);
  });

  const hasThreads =
    leftButtonsList.findIndex(function (b) {
      return !b.url;
    }) >= 0;

  // функция обратного вызова при закрытии чата
  if (hasThreads && ThreadsWidget) {
    ThreadsWidget.onLoad(function () {
      ThreadsWidget.on('hideChat', function () {
        container.classList.remove(hideClass);
      });
    });
  }
}
