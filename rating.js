document.querySelectorAll('.rating-widget').forEach((form) => {
  const status = form.querySelector('[data-rating-status]');
  const choices = [...form.querySelectorAll('.rating-choice')];
  const paintStars = (value) => choices.forEach((choice) => {
    const score = Number(choice.querySelector('input').value);
    choice.classList.toggle('is-lit', score <= value);
  });

  choices.forEach((choice) => {
    const input = choice.querySelector('input');
    input.addEventListener('change', () => paintStars(Number(input.value)));
    choice.querySelector('label').addEventListener('mouseenter', () => paintStars(Number(input.value)));
  });
  form.querySelector('.rating-stars')?.addEventListener('mouseleave', () => {
    const selected = form.querySelector('input[name="rating"]:checked');
    paintStars(selected ? Number(selected.value) : 0);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const rating = formData.get('rating');
    const feedback = String(formData.get('feedback') || '').trim();
    const topic = form.dataset.ratingTopic || 'HideOut Creatives';
    const subject = `HideOut Creatives feedback: ${topic} (${rating}/5)`;
    const body = [
      `Rating: ${rating}/5`,
      `Topic: ${topic}`,
      `Page: ${window.location.href}`,
      '',
      'Feedback:',
      feedback || '(No written feedback)',
    ].join('\n');

    if (status) {
      status.textContent = 'Your email app should open with your rating. Review the message and send it to share your feedback.';
    }

    window.location.href = `mailto:shadowhacktech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
