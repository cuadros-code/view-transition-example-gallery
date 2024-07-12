import './style.css'

const cards = document.querySelectorAll('.card');


cards.forEach( card => {
  card.addEventListener('click', async (event) => onClick(event))
});

async function onClick(event) {

  document.querySelector('.main-card').style.viewTransitionName = 'transition-gallery';

  const transition = document.startViewTransition(() => {
    document.querySelector('.main-card').src = event.target.src;
  })

  await transition.finished;
}