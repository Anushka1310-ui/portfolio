const projects = {
  proj1: {
    title: "Blog Website",
    description: "A modern, responsive blog platform built with HTML, CSS, and JavaScript to share articles and stories."
  },
  proj2: {
    title: "Recipe App",
    description: "A recipe search and saving application with a user-friendly interface and API integration."
  },
  proj3: {
    title: "Chat App",
    description: "Real-time chat app allowing users to join multiple chat rooms and communicate seamlessly."
  }
};

const projectElements = document.querySelectorAll('.project');
const projectDetails = document.getElementById('project-details');
const projectTitle = document.getElementById('project-title');
const projectDesc = document.getElementById('project-desc');
const closeBtn = document.getElementById('close-btn');

projectElements.forEach(el => {
  el.addEventListener('click', () => {
    const id = el.getAttribute('data-id');
    const project = projects[id];
    if (project) {
      projectTitle.textContent = project.title;
      projectDesc.textContent = project.description;
      projectDetails.classList.remove('hidden');
    }
  });
});

closeBtn.addEventListener('click', () => {
  projectDetails.classList.add('hidden');
});

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = 'green';
    contactForm.reset();
  } else {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  }
});
