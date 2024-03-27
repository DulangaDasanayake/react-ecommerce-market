<div align="center">

  # MERN SHOP
  

  🛒🚀 Full-stack e-commerce application built with the MERN stack, Tailwind CSS, Firebase, and hosted on Render.com. Browse, shop, and checkout with ease!

</div>

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🔧 Installation](#-installation)
- [💻 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## 🚀 Features

- User authentication and authorization using Firebase.
- Browse products by category.
- Add products to the shopping cart.
- Update and remove items from the cart.
- Secure checkout process with payment integration.
- User profile with order history.

## 🛠️ Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - React Router for navigation
  - Tailwind CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for object modeling
  - JSON Web Tokens (JWT) for authentication

- **Authentication:**
  - Firebase Authentication for Google authentication

- **Hosting:**
  - Render.com for deployment and hosting

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DulangaDasanayake/mern-shop-main.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mern-shop-main
   ```

3. **Install dependencies for both frontend and backend:**

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_uri` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT.

## 💻 Usage

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**

   ```bash
   cd frontend
   npm start
   ```

3. **Open your browser and navigate to `http://localhost:3000` to view the application.**

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


