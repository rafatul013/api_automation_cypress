# **API-Automation-Project-With-Cypress**

## **Project Scenario:**
This project demonstrates the automation of API endpoints using the Cypress framework. The scenario includes operations for managing bookings on a demo API platform.

## **Endpoints Automated:**
1. **Create Booking:**  
   - Adds a new booking with user details.  
   - Stores the `bookingid` for further operations.

2. **Get Booking:**  
   - Retrieves the details of a specific booking using `bookingid`.

3. **Login:**  
   - Authenticates a user with valid credentials.  
   - Retrieves and stores the authentication token.

4. **Update Booking:**  
   - Updates the details of an existing booking using `bookingid`.

5. **Delete Booking:**  
   - Deletes a specific booking using `bookingid`.

---

## **Technology Used:**
- **Cypress**: JavaScript-based test automation framework.
- **JavaScript**: Scripting language for writing tests.
- **Visual Studio Code**: IDE for code development.
- **Mochawesome**: Reporter for generating detailed HTML reports.

---

## **Pre-requisite:**
- Install **Node.js** on your machine.

---

## **How to Run this Project:**
1. **Clone this project**:  
   Download or clone the repository from GitHub.

2. **Install dependencies**:  
   Navigate to the project directory and run:  
   ```bash
   npm install
   ```

3. **Execute tests**:  
   Use the following commands to run the Cypress tests:  
   - Open Cypress Test Runner:  
     ```bash
     npx cypress open
     ```  
   - Run all tests in the CLI:  
     ```bash
     npx cypress run
     ```

4. **Generate Mochawesome Report**:  
   Install the Mochawesome reporter (if not already installed):  
   ```bash
   npm i cypress-mochawesome-reporter
   ```  
   Run tests with the reporter:  
   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
   ```

---

## **Mochawesome Report:**
![image](https://github.com/user-attachments/assets/03f42056-6881-453d-9c3c-518d2bcf070e)

