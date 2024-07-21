# Online Money Transaction System

## Overview

This project is an online money transaction system built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to perform transactions, view their transaction history, and manage their accounts securely.

## Features

- User Registration and Authentication
- Account Management
- Money Transfer between Users
- Transaction History
- Secure and Scalable

## Tech Stack

- **MongoDB**: NoSQL database for storing user and transaction data
- **Express**: Backend framework for building RESTful APIs
- **React**: Frontend library for building the user interface
- **Node.js**: JavaScript runtime for server-side logic

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Local or Atlas cluster)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/online-money-transaction.git
    cd online-money-transaction
    ```

2. **Install Backend Dependencies**

    Navigate to the `backend` directory and install the required packages:

    ```bash
    cd backend
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. **Start the Backend Server**

    ```bash
    npm start
    ```

5. **Install Frontend Dependencies**

    Navigate to the `frontend` directory and install the required packages:

    ```bash
    cd ../frontend
    npm install
    ```

6. **Start the Frontend Server**

    ```bash
    npm start
    ```

    The React application should now be running on [http://localhost:3000](http://localhost:3000).

### Usage

- **Registration**: Users can create a new account by providing their details on the registration page.
- **Login**: Existing users can log in with their credentials.
- **Transactions**: Users can initiate and manage transactions through the application interface.
- **Transaction History**: Users can view their past transactions in their account.

### API Documentation

Refer to the [API Documentation](docs/API.md) for detailed information on the backend endpoints.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the project's coding standards and passes all tests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contact

For any questions or issues, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

Happy coding!
