$(document).ready(function() {
    $('.navbar .nav-link').click(function(event) {
      event.preventDefault(); // Prevent the default link behavior
      
      // Remove "active" class from all navbar items
      $('.navbar .nav-link').removeClass('active');
      
      // Add "active" class to the clicked navbar item
      $(this).addClass('active');
    });
  });