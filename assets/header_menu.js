const header_link_1 = document.getElementById('header_link-1');
const header_link_2 = document.getElementById('header_link-2');
const header_link_3 = document.getElementById('header_link-3');
const header_link_4 = document.getElementById('header_link-4');
const header_link_5 = document.getElementById('header_link-5');
const header_link_6 = document.getElementById('header_link-6');
const header_link_7 = document.getElementById('header_link-7');

const section_contacts = document.getElementById('contacts');
const section_skills = document.getElementById('skills');
const section_code = document.getElementById('code');
const section_courses = document.getElementById('courses');
const section_projects = document.getElementById('projects');
const section_education = document.getElementById('education');
const section_english = document.getElementById('english');

header_link_1.addEventListener('click', () => {
  if(header_link_1.classList.contains('header_link-active')) {
    header_link_1.classList.remove('header_link-active');
    section_contacts.classList.remove('section-contacts-active');
    } else {
    header_link_1.classList.add('header_link-active');
    section_contacts.classList.add('section-contacts-active');

    section_code.classList.remove('section-code-active');
    section_skills.classList.remove('section-skills-active');
    section_courses.classList.remove('section-courses-active');
    section_projects.classList.remove('section-projects-active');
    section_education.classList.remove('section-education-active');
    section_english.classList.remove('section-english-active');



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
    section_skills.classList.remove('section-skills-active');
  } else {
    header_link_2.classList.add('header_link-active');
    section_skills.classList.add('section-skills-active');

    section_contacts.classList.remove('section-contacts-active');
    section_code.classList.remove('section-code-active');
    section_courses.classList.remove('section-courses-active');
    section_projects.classList.remove('section-projects-active');
    section_education.classList.remove('section-education-active');
    section_english.classList.remove('section-english-active');

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
    header_link_3.classList.remove('header_link-active');
    section_code.classList.remove('section-code-active');
  } else {
    header_link_3.classList.add('header_link-active');
    section_code.classList.add('section-code-active');

    section_contacts.classList.remove('section-contacts-active');
    section_skills.classList.remove('section-skills-active');
    section_courses.classList.remove('section-courses-active');
    section_projects.classList.remove('section-projects-active');
    section_education.classList.remove('section-education-active');
    section_english.classList.remove('section-english-active');

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
    section_courses.classList.remove('section-courses-active');
  } else {
    header_link_4.classList.add('header_link-active');
    section_courses.classList.add('section-courses-active');

    section_contacts.classList.remove('section-contacts-active');
    section_code.classList.remove('section-code-active');
    section_skills.classList.remove('section-skills-active');
    section_projects.classList.remove('section-projects-active');
    section_education.classList.remove('section-education-active');
    section_english.classList.remove('section-english-active');

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
    header_link_5.classList.remove('header_link-active');
    section_projects.classList.remove('section-projects-active');
  } else {
    header_link_5.classList.add('header_link-active');
    section_projects.classList.add('section-projects-active');

    section_contacts.classList.remove('section-contacts-active');
    section_skills.classList.remove('section-skills-active');
    section_code.classList.remove('section-code-active');
    section_courses.classList.remove('section-courses-active');
    section_education.classList.remove('section-education-active');
    section_english.classList.remove('section-english-active');

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
    header_link_6.classList.remove('header_link-active');
    section_education.classList.remove('section-education-active');
  } else {
    header_link_6.classList.add('header_link-active');
    section_education.classList.add('section-education-active');

    section_contacts.classList.remove('section-contacts-active');
    section_code.classList.remove('section-code-active');
    section_skills.classList.remove('section-skills-active');
    section_courses.classList.remove('section-courses-active');
    section_projects.classList.remove('section-projects-active');
    section_english.classList.remove('section-english-active');
    
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
    header_link_7.classList.remove('header_link-active');
    section_english.classList.remove('section-english-active');
  } else {
    header_link_7.classList.add('header_link-active');
    section_english.classList.add('section-english-active');

    section_contacts.classList.remove('section-contacts-active');
    section_skills.classList.remove('section-skills-active');
    section_code.classList.remove('section-code-active');
    section_courses.classList.remove('section-courses-active');
    section_projects.classList.remove('section-projects-active');
    section_education.classList.remove('section-education-active');
    

    header_link_6.classList.remove('header_link-active')
    header_link_5.classList.remove('header_link-active');
    header_link_4.classList.remove('header_link-active');
    header_link_3.classList.remove('header_link-active');
    header_link_2.classList.remove('header_link-active');
    header_link_1.classList.remove('header_link-active');
  }
});