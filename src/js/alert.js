import alerts from "../public/json/alerts.json"; // Import the alerts data

class Alert {
  constructor() {
    this.alerts = alerts;
    this.init();
  }

  init() {
    if (this.alerts.length > 0) {
      // Create a <section> element to hold all alerts
      const alertSection = document.createElement("section");
      alertSection.className = "alert-list";

      // Loop through each alert and create a <div> element for each alert
      this.alerts.forEach((alert) => {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert-message";
        alertDiv.textContent = alert.message;
        alertDiv.style.backgroundColor = alert.background;
        alertDiv.style.color = alert.color;
        alertDiv.style.padding = "8px";
        alertDiv.style.marginBottom = "2px";
        alertDiv.style.borderRadius = "5px";
        alertDiv.style.textAlign = "center";
        alertDiv.style.fontSize = "16px";
        alertDiv.style.fontWeight = "bold";
        alertDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        alertDiv.style.position = "relative";

        // Add a close button to dismiss the alert
        const closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.style.position = "absolute";
        closeButton.style.right = "10px";
        closeButton.style.top = "50%";
        closeButton.style.transform = "translateY(-50%)";
        closeButton.style.background = "none";
        closeButton.style.border = "none";
        closeButton.style.color = alert.color;
        closeButton.style.cursor = "pointer";
        closeButton.style.fontSize = "20px";
        closeButton.style.lineHeight = "1";
        closeButton.addEventListener("click", () => {
          alertDiv.remove(); // Remove the alert when the close button is clicked
        });

        alertDiv.appendChild(closeButton);
        alertSection.appendChild(alertDiv);
      });

      // Prepend the alert section to the <main> element or another container
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.prepend(alertSection);
      } else {
        console.error("Main element not found on the page.");
      }
    }
  }
}

export default Alert;
