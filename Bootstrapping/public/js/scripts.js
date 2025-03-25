// List of items to be used for the cards, including kitten.jpg
const cardList = [
    {
      title: "Kitten",
      image: "images/kitten.jpg",  // Add kitten.jpg here
      link: "About Kitten",
      description: "Demo description about kitten"
    },
    {
      title: "Kitten 2",
      image: "images/kitten-2.jpg",  // Ensure correct image path
      link: "About Kitten 2",
      description: "Demo description about kitten 2"
    },
    {
      title: "Kitten 3",
      image: "images/kitten-3.jpg",  // Ensure correct image path
      link: "About Kitten 3",
      description: "Demo description about kitten 3"
    }
  ];
  
  // Function to handle button click
  const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
  }
  
  // Function to dynamically create cards and append them to the HTML
  const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = `
        <div class="col s4 center-align">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}">
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
  
  // jQuery document ready function
  $(document).ready(function() {
    // Initialize materialize components
    $('.materialboxed').materialbox();
    $('.modal').modal();  // Initialize the modal
    
    // Set up click event for the button
    $('#clickMeButton').click(() => {
      clickMe();
    });
  
    // Add the cards to the page by calling the addCards function
    addCards(cardList);
  
    // Trigger modal open
    $('#formSubmit').click(function() {
      $('#modal1').modal('close'); // Close the modal after form submission (if any action is needed)
      alert("Form submitted!"); // Placeholder action after submitting form
    });
  });
  