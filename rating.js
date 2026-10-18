const RATINGS_API = 'https://digitracker-rq61.onrender.com/api/v1/site/ratings';

document.querySelectorAll('.rating-widget').forEach((form) => {
  const status = form.querySelector('[data-rating-status]');
  const choices = [...form.querySelectorAll('.rating-choice')];
  const button = form.querySelector('[type="submit"]');
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

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (status) status.textContent = 'Sending your rating…';
    if (button) button.disabled = true;
    const formData = new FormData(form);
    try {
      const response = await fetch(RATINGS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: form.dataset.ratingTopic || '',
          rating: Number(formData.get('rating')),
          feedback: String(formData.get('feedback') || '').trim(),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || 'Your rating could not be saved. Please try again.');
      form.reset();
      paintStars(0);
      if (status) status.textContent = 'Thanks for sharing your rating. It has been saved.';
    } catch (error) {
      if (status) status.textContent = `${error.message} You can contact us at shadowhacktech@gmail.com.`;
    } finally {
      if (button) button.disabled = false;
    }
  });
});
