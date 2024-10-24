document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Grab form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Simple validation (for demo purposes)
  if(name && email && message) {
      alert('Your message has been sent! Thanks!');
  } else {
      alert('Please fill out all fields.');
  }
});