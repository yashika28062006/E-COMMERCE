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

**Milestone 7: create a backend endpoint for user login.**


**Milestone 8: create a frontend card component for products and design a homepage to display these cards for each product.**

**Milestone 9: creating a product form.**


**Milestone 10: we will create a mongoose schema for products and create and endpoint to store the product details.**
 
**Milestone 11:  will make our home page that will display all the products dynamic.**

**Milestone 12:we will make our My products page that will display all the products That i was added according to my mail.**

## Milestone 13:
Created a backend endpoint in Express to delete a product by its ID from MongoDB.
Used MongoDB’s findByIdAndDelete() method to remove the product.
Updated the frontend UI by adding a Delete button to each product card.
When the button is clicked, it sends a DELETE request to the backend with the product ID.
Ensured that the product disappears from the UI after successful deletion.
Tested the API using Postman or an API client.
Committed the changes to GitHub and updated the README with Milestone 14 progress.
Submitted the repository link as required.


---


## Milestone 14:
Created a backend endpoint in Express to update a product by its ID in MongoDB.
Used MongoDB’s findByIdAndUpdate() method to modify the product details.
Added an Edit button to each product card in the frontend UI.
When the button is clicked, the existing product details are auto-filled into a form.
Allowed users to modify and save the updated details.
Sent a PUT request to update the product in the database.
Ensured the updated product details appear in the UI after a successful update.
Committed all changes to GitHub and updated the README with Milestone 13 progress.


---

## Milestone:15:
Created a Nav component containing links to:
Home
My Products
Add Product
Cart
Implemented React Router to enable seamless navigation between pages.
Ensured responsiveness using CSS/Flexbox/Tailwind, making the navbar adapt to all screen sizes.
Added the Nav component to all pages for consistency.
Used state management (if needed) for active link highlighting.
Tested navigation to confirm smooth transitions.
Committed all changes to GitHub and updated the README with Milestone 15 details.


---

# Milestone 16 - Product Info Page

## Project Overview 🚀
This milestone focuses on creating a product info page that displays all product details, allows users to select a quantity, and includes an "Add to Cart" button.

## Learning Goals 🎯
By completing this milestone, I have learned:
How to create a new page to display product details.
How to add a quantity selection feature.
How to implement an "Add to Cart" button.


# Milestone 17: Cart Functionality

## Overview

In this milestone, we implemented the cart functionality by creating a schema to store products in the cart and an API endpoint to receive and store product details.

## Achievements

* **Created Cart Schema:**
    * Designed a Mongoose schema to store cart items.
    * Included product details like name, price, quantity, and user reference.
* **Implemented API Endpoint:**
    * Developed a route to add products to the cart.
    * Handled requests to store product details in MongoDB.
* **Database Integration:**
    * Ensured cart items are stored and retrieved efficiently using MongoDB Atlas.
* **Code Pushed to GitHub:**
    * All changes have been committed and pushed to the repository.

---


Milestone 18: Creating an end point for cart page
In this milestone, we implemented a backend endpoint to fetch all the products inside a user's cart. This functionality is essential for displaying the cart contents on the cart page.
Backend: API Integration Created a new API endpoint to fetch all products in a user's cart. Implemented server-side logic to retrieve the cart contents from the database. Frontend: Cart Page Designed a new Cart Page component that displays the products in the user's cart. Used React Router to navigate to the Cart Page. State Management and API Integration Fetched the cart contents from the backend using the API endpoint. The final product will have the following features: A user can view all products on the homepage. A user can view product details on a dedicated product info page. A user can add products to their cart. A user can view their cart contents on the cart page.



