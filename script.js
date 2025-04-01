// Getting information from all repos in the account named "diegot-code"

const account = "diegot-code";

const apiUrl = "https://api.github.com/users/" + account + "/repos";

fetch("https://api.github.com/users/diegot-code/repos")
  .then((response) => response.json()) // Fetch the JSON response from the API
  .then((data) => {
    // Log the data to the console
    console.log(data);

    // Find an element with the class "root" in the HTML
    const root = document.querySelector(".root");

    // Slice the data array to the first 4 elements
    const slicedData = data.slice(0, 6);

    for (let i = 0; i < slicedData.length; i++) {
      // Log the current iteration index in the for loop
      console.log(i);

      // Get the current repository object (refer to line 12)
      const currentRepo = slicedData[i];

      // Create a new <div> element
      const newDiv = document.createElement("div");

      // Set the inner HTML of the new <div> element using back tics(``) as parameters
      newDiv.innerHTML = `
      <h3>${currentRepo.name}</h3>
      <a href="${currentRepo.html_url}">Api Reference </a>
      <br>
      <a href="${currentRepo.html_url}">Visit</a>
      `;

      // Append the new <div> to the "root" element in the HTML
      root.appendChild(newDiv);
    }
  })
  .catch((error) => {
    console.error(error); // Log any errors to the console
  });
