const header_link_1 = document.getElementById('header_link-1');
const header_link_2 = document.getElementById('header_link-2');
const header_link_3 = document.getElementById('header_link-3');
const header_link_4 = document.getElementById('header_link-4');
const header_link_5 = document.getElementById('header_link-5');
const header_link_6 = document.getElementById('header_link-6');
const header_link_7 = document.getElementById('header_link-7');

const section_contacts_1 = document.getElementById('contacts');
const section_contacts_2 = document.getElementById('skills');
const section_contacts_3= document.getElementById('code');
const section_contacts_4 = document.getElementById('courses');
const section_contacts_5 = document.getElementById('projects');
const section_contacts_6 = document.getElementById('education');
const section_contacts_7 = document.getElementById('english'); 

header_link_1.addEventListener('click', () => {
  if(header_link_1.classList.contains('header_link-active')) {
    header_link_1.classList.remove('header_link-active');
    } else {
    header_link_1.classList.add('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_5.classList.remove('header_link-active');
    header_link_6.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');
  }
});

header_link_2.addEventListener('click', () => {
  if(header_link_2.classList.contains('header_link-active')) {
    header_link_2.classList.remove('header_link-active')
  } else {
    header_link_2.classList.add('header_link-active');
    header_link_1.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_5.classList.remove('header_link-active');
    header_link_6.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');
  }
});

header_link_3.addEventListener('click', () => {
  if(header_link_3.classList.contains('header_link-active')) {
    header_link_3.classList.remove('header_link-active')
  } else {
    header_link_3.classList.add('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_5.classList.remove('header_link-active');
    header_link_6.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');

  }
});

header_link_4.addEventListener('click', () => {
  if(header_link_4.classList.contains('header_link-active')) {
    header_link_4.classList.remove('header_link-active')
  } else {
    header_link_4.classList.add('header_link-active')
    header_link_3.classList.remove('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
    header_link_5.classList.remove('header_link-active');
    header_link_6.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');
  }
});

header_link_5.addEventListener('click', () => {
  if(header_link_5.classList.contains('header_link-active')) {
    header_link_5.classList.remove('header_link-active')
  } else {
    header_link_5.classList.add('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
    header_link_6.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');
  }
});

header_link_6.addEventListener('click', () => {
  if(header_link_6.classList.contains('header_link-active')) {
    header_link_6.classList.remove('header_link-active')
  } else {
    header_link_6.classList.add('header_link-active')
    header_link_5.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
    header_link_7.classList.remove('header_link-active');
  }
});

header_link_7.addEventListener('click', () => {
  if(header_link_7.classList.contains('header_link-active')) {
    header_link_7.classList.remove('header_link-active')
  } else {
    header_link_7.classList.add('header_link-active');
    header_link_6.classList.remove('header_link-active')
    header_link_5.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
  }
});