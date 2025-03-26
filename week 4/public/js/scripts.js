// Function to dynamically create cards and append them to the HTML
const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator materialboxed" src="${item.image}" alt="${item.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title} <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    `;
    // Append each card to the card-section div
    $("#card-section").append(itemToAppend);
  });
}

// Function to make a GET request to fetch project data from the backend
const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      // If the response is successful, call the addCards function to display the cards
      addCards(response.data);
    }
  });
}

// Function to handle button click to open the modal
const clickMe = () => {
  // Open the modal when the button is clicked
  $('#modal1').modal('open');
}

// jQuery document ready function
$(document).ready(function() {
  // Initialize materialize components
  $('.materialboxed').materialbox();
  $('.modal').modal();  // Initialize the modal
  
  // Set up click event for the button to open the modal
  $('#clickMeButton').click(() => {
    clickMe();
  });

  // Fetch and display the project cards using getProjects function
  getProjects();

  // Handle form submission
  $('#formSubmit').click(function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const email = $('#email').val();

    // Log form data to the console (for debugging)
    console.log("Form Submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Show the alert with the entered information (optional: you can process or send this data)
    alert(`Thank you! Your form has been submitted successfully`);

    // Close the modal after form submission
    $('#modal1').modal('close');
  });
});
