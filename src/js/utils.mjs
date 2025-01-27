// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// helper to get parameter strings
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}



export function renderWithTemplate(template, parentElement, data, callback) {
  // Render the template string into the parent element.
  parentElement.insertAdjacentHTML("afterbegin", template);

  // If a callback is provided, execute it with the data.
  if (callback) {
    callback(data);
  }
}

// Helper function to convert a fetch response to text
function convertToText(response) {
  return response.text();
}

// Function to load a template from a given path
export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);  // Fetch HTML and convert to text
  const template = document.createElement('template');  // Create a <template> element
  template.innerHTML = html;  // Set the fetched HTML into the template's innerHTML
  return template;  // Return the template element
}



// Function to load the header and footer templates and render them
export async function loadHeaderFooter(headerPath, footerPath, callback) {
  // Load the header and footer templates
  const headerTemplate = await loadTemplate(headerPath);
  const footerTemplate = await loadTemplate(footerPath);

  // Get the header and footer elements from the DOM
  const headerElement = document.getElementById('header');
  const footerElement = document.getElementById('footer');

  // Render the header and footer into the DOM
  renderWithTemplate(headerTemplate.innerHTML, headerElement, {}, null);
  renderWithTemplate(footerTemplate.innerHTML, footerElement, {}, null);

  // Run the callback if provided
  if (callback) {
    callback();
  }
}







// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}