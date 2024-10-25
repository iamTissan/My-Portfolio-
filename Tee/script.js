// Function to handle menu toggle for mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('d-none');
});

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message (you can add your form submission logic here)
    const responseDiv = document.getElementById('form-response');
    responseDiv.textContent = `Thank you for your message, ${name}! We will get back to you soon.`;
    responseDiv.style.color = '#28a745'; // Green color for success message

    // Reset the form
    document.getElementById('contactForm').reset();
});
