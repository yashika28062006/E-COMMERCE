# Ecommerce-Follow-Along

*Milestone 1: Project Overview*

This project is designed to enhance the shopping experience by providing users with an efficient and personalized e-commerce platform. It allows users to browse, purchase, and manage products seamlessly while enjoying a user-friendly interface.

*Key Features*  

- This application uses *MERN Stack*
- *REST API Creation*: It is a style used for building web services that allow communication between a client and a server using standard HTTP methods.
- *Authentication*: This is the process of verifying the identity of a user before allowing them access to specific resources. 
- *Backend Development*: In MongoDB, schema design is the process of defining the structure and relationships of the data stored in the database.

*Tech Stack*  

- *Frontend*: React framework for building the user interface.  
- *Backend*: Node.js to handle server-side operations and APIs.  
- *Database*: MongoDB for storing user and product data efficiently.  


*Milestone 2: Project Setup and Login Page*

This milestone focuses on setting up the project structure and implementing a basic login page.

*Key Features*

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

*Tech Stack Used*

- Frontend: React, Tailwindcss

*Milestone 3: Serevr setup and error handling.*


*Key Features:* 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

*Tech Stack* 

Backend: Node.js, Express  
Database: MongoDB, Mongoose


*Milestone 4: Creating User Model and Controller*

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using **Multer**.

*Features*
- **User Model**: Blueprint for storing user data in the database.
- **User Controller**: Manages operations like adding, retrieving, and updating user information.
- **File Uploads**: Accepts and stores user-uploaded files (e.g., profile images).
- **Documentation**: Well-documented code for ease of 

**Milestone 5: Upload and Download User Information from Files**

This milestone focuses on implementing the ability to upload and download user information using files.

**Key Features:**

- **File Upload:** Implemented functionality to allow users to upload their information via files.
- **File Download:** Users can download their stored information in a structured format.
- **Security Considerations:** Ensured secure file handling to prevent vulnerabilities.

**Tech Stack:**

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **File Handling:** Multer

---

**Milestone 6: Secure User Signup with Password Encryption**

In this milestone, we created a backend endpoint for the Signup page to securely store user data. The password is encrypted before being stored in the database to enhance security.

**Key Features:**

- **Password Encryption:** Used `bcrypt` to hash the user's password before saving it in the database.
- **User Data Storage:** Stored complete user details securely while keeping the password protected.
- **Security Compliance:** Followed best practices for data protection and compliance with security standards.

**Implementation Steps:**

1. Installed and configured `bcrypt` for password hashing.
2. Updated the user model to store hashed passwords instead of plain text.
3. Created a signup API endpoint that encrypts passwords before storing user data in MongoDB.
4. Implemented error handling and validation for user registration.

**Tech Stack:**

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Security:** Bcrypt for password hashing

**Next Steps:**
In the upcoming milestone, we will build more advanced features for the application, enhancing user experience and security measures.

## Milestone 14:
Created a backend endpoint in Express to delete a product by its ID from MongoDB.
Used MongoDB’s findByIdAndDelete() method to remove the product.
Updated the frontend UI by adding a Delete button to each product card.
When the button is clicked, it sends a DELETE request to the backend with the product ID.
Ensured that the product disappears from the UI after successful deletion.
Tested the API using Postman or an API client.
Committed the changes to GitHub and updated the README with Milestone 14 progress.
Submitted the repository link as required.

