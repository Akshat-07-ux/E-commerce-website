const close=document.querySelector(".close");  const
open=document.querySelector(".ham"); const
menu=document.querySelector(".menu") 
close.addEventListener("click",()=>{ 
menu.style.visibility="hidden"; })  
open.addEventListener("click",()=>{ 
menu.style.visibility="visible";  })
document.addEventListener('DOMContentLoaded', function() {
    // Check if the page is loaded
    const openFormButton = document.querySelector('.open-form');
    const formContainer = document.querySelector('.form-container');
    const form = document.getElementById('user-form');

    // Add event listener to the Open Form button
    openFormButton.addEventListener('click', function() {
        // Toggle the visibility of the form container
        formContainer.classList.toggle('hidden');

        // Clear the input fields when the form is opened
        if (!formContainer.classList.contains('hidden')) {
            clearFormInputs();
        }
    });

    // Function to clear form inputs
    function clearFormInputs() {
        form.reset(); // This will clear all input fields in the form
    }

    // Add event listener to the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Your code to send data to Firebase goes here
        sendDataToFirebase(getFormData());
        
        // Clear the input fields after submission
        clearFormInputs();
    });

    // Function to get form data as an object
    function getFormData() {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        return data;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const ourProductsLink = document.querySelector('.heading ul li:nth-child(2) a');
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of your header

    // Add event listener to the "Our Products" link
    ourProductsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the container element for "section2"
        const section2Container = document.querySelector('.section2');

        // Scroll to the container with an offset to accommodate the header height
        window.scrollTo({
            top: section2Container.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactUsLink = document.querySelector('.heading ul li:nth-child(3) a');
    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of your header

    // Add event listener to the "Contact Us" link
    contactUsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the container element for the footer
        const footerContainer = document.querySelector('footer');

        // Scroll to the container with an offset to accommodate the header height
        window.scrollTo({
            top: footerContainer.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});
