'use strict';
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');
const previewDoc = document.querySelector('.preview-doc');
const previewDocImg = previewDoc.querySelector('.doc-img');
const docName = previewDoc.querySelector('.doc-name');
const docPosition = previewDoc.querySelector('.doc-position');
const docs = document.querySelectorAll('.doc');
const docWrap = document.querySelector('.doctors-center');
const scrollLinks = document.querySelectorAll('.scroll-link');
const singleService = document.querySelectorAll('.single-service');
const topLink = document.querySelector('.top-link');

let allDoctors = [
  {
    name: ' Donald Glover',
    position: 'Medical Director',
    img: 'Doctor-1',
  },
  {
    name: ' Micheal Harvey',
    position: 'Chief veterinarian',
    img: 'Doctor-2',
  },
  {
    name: ' Cynthia Morgan',
    position: 'Chief Medical Director',
    img: 'Doctor-3',
  },
  {
    name: ' John Doe',
    position: 'veterinarian',
    img: 'Doctor-4',
  },
];

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navbar.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (
    e.target.id !== 'header' &&
    e.target.id !== 'toggle' &&
    e.target.id !== 'navbar'
  ) {
    toggle.classList.remove('open');
    navbar.classList.remove('open');
  }
});

docs.forEach(doc => {
  doc.addEventListener('click', () => {
    let docIndex = doc.getAttribute('id').slice(4);

    function loadDoc() {
      previewDocImg.src = `./Images/${allDoctors[docIndex - 1].img}.jpg`;
      docName.innerHTML = allDoctors[docIndex - 1].name;
      docPosition.innerHTML = allDoctors[docIndex - 1].position;
    }

    loadDoc(docIndex);
  });
});

docWrap.addEventListener('click', e => {
  const clicked = e.target.closest('.doc');
  if (!clicked) return;

  docs.forEach(doc => {
    doc.style.border = 'none';
  });

  clicked.style.border = '2px solid #ffac1c';
});

singleService.forEach(singleService => {
  singleService.addEventListener('mouseover', () => {
    const serviceIcon = singleService.querySelector('.service-icon');
    const serviceTitle = singleService.querySelector('.service-title');
    const serviceText = singleService.querySelector('.service-text');
    const icon = serviceIcon.querySelector('.icon');
    serviceIcon.style.backgroundColor = '#fff';
    icon.style.color = '#007fff';
    serviceTitle.style.color = '#fff';
    serviceText.style.color = '#fff';
  });

  singleService.addEventListener('mouseout', () => {
    const serviceIcon = singleService.querySelector('.service-icon');
    const serviceTitle = singleService.querySelector('.service-title');
    const serviceText = singleService.querySelector('.service-text');
    const icon = serviceIcon.querySelector('.icon');
    console.log(icon);
    serviceIcon.style.backgroundColor = '#007fff';
    icon.style.color = '#fff';
    serviceTitle.style.color = '#181b24';
    serviceText.style.color = '#899495';
  });
});

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const headerHeight = header.getBoundingClientRect().height;
    let position = element.offsetTop - headerHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    topLink.classList.add('show-top-link');
  } else {
    topLink.classList.remove('show-top-link');
  }
});
