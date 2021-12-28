const grid_link_1 = document.getElementById('grid_link-1');
const grid_link_2 = document.getElementById('grid_link-2');
const grid_link_3 = document.getElementById('grid_link-3');
const grid_link_4 = document.getElementById('grid_link-4');
const grid_link_5 = document.getElementById('grid_link-5');
const grid_link_6 = document.getElementById('grid_link-6');

const modal_container_1= document.getElementById('modal_container-1');
const modal_container_2= document.getElementById('modal_container-2');
const modal_container_3= document.getElementById('modal_container-3');
const modal_container_4= document.getElementById('modal_container-4');
const modal_container_5= document.getElementById('modal_container-5');
const modal_container_6= document.getElementById('modal_container-6');

const modal_close_1 = document.getElementById('modal_close-1');
const modal_close_2 = document.getElementById('modal_close-2');
const modal_close_3 = document.getElementById('modal_close-3');
const modal_close_4 = document.getElementById('modal_close-4');
const modal_close_5 = document.getElementById('modal_close-5');
const modal_close_6 = document.getElementById('modal_close-6');

grid_link_1.addEventListener('click', () => {
  modal_container_1.classList.add('show');
});
modal_close_1.addEventListener('click', () => {
  modal_container_1.classList.remove('show');
})
grid_link_2.addEventListener('click', () => {
  modal_container_2.classList.add('show');
});
modal_close_2.addEventListener('click', () => {
  modal_container_2.classList.remove('show');
})
grid_link_3.addEventListener('click', () => {
  modal_container_3.classList.add('show');
});
modal_close_3.addEventListener('click', () => {
  modal_container_3.classList.remove('show');
})
grid_link_4.addEventListener('click', () => {
  modal_container_4.classList.add('show');
});
modal_close_4.addEventListener('click', () => {
  modal_container_4.classList.remove('show');
})
grid_link_5.addEventListener('click', () => {
  modal_container_5.classList.add('show');
});
modal_close_5.addEventListener('click', () => {
  modal_container_5.classList.remove('show');
})
grid_link_6.addEventListener('click', () => {
  modal_container_6.classList.add('show');
});
modal_close_6.addEventListener('click', () => {
  modal_container_6.classList.remove('show');
})
