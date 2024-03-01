document.addEventListener('DOMContentLoaded', function() {
    const courses = [
      { title: 'Introduction to HTML', instructor: 'Harry', duration: '4 weeks', description: 'Learn the basics of HTML.',homepage:'index.html' },
      { title: 'CSS Fundamentals', instructor: 'Hitesh Choudhary', duration: '6 weeks', description: 'Master the fundamentals of CSS.',homepage:'index.html' },
      { title: 'JavaScript Basics', instructor: 'Shardha Kaphra', duration: '8 weeks', description: 'Get started with JavaScript programming.',homepage:'index.html' }
    ];
  
    const courseList = document.getElementById('course-list');
    const modal = document.getElementById('course-details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInstructor = document.getElementById('modal-instructor');
    const modalDuration = document.getElementById('modal-duration');
    const modalDescription = document.getElementById('modal-description');
    const enrollButton = document.getElementById('enroll-button');
    const closeModal = document.querySelector('.close');
  
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course');
      courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <p>Instructor: ${course.instructor}</p>
        <p>Duration: ${course.duration}</p>
        <button class="details-button">View Details</button>
      `;
      courseList.appendChild(courseDiv);
    });
  
    const detailButtons = document.querySelectorAll('.details-button');
  
    detailButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const selectedCourse = courses[index];
        modalTitle.textContent = selectedCourse.title;
        modalInstructor.textContent = `Instructor: ${selectedCourse.instructor}`;
        modalDuration.textContent = `Duration: ${selectedCourse.duration}`;
        modalDescription.textContent = `Description: ${selectedCourse.description}`;
        modal.style.display = 'block';
      });
    });
  
    closeModal.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  
    enrollButton.addEventListener('click', () => {
      alert('You have successfully enrolled in the course!');
    });
  });
  
  