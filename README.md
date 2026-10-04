# 💰 Hisab — Expense Tracker

_A simple and responsive expense tracker built with **React** and **Tailwind CSS** to manage income, expenses, balance, and transaction history._

## ✨ Features

- 💵 Set initial income
- ➕ Add income and expense transactions
- 📊 Automatically calculate current balance
- 💳 Separate income and expense cards
- 📜 View transaction history
- 📅 Automatically record transaction dates
- 💾 Persist data using **Local Storage**
- 💲 Format amounts with proper currency formatting
- 🌙 Light / dark mode
- 📱 Responsive design for different screen sizes
- ✅ Input validation
- 🔄 Newest transactions appear first

---

## 🛠️ Tech Stack

- **React**
- **JavaScript**
- **Tailwind CSS**
- **HTML**
- **Local Storage**
- **Vite**

---

## 📁 Project Structure

src/
├── assets/
│   ├── hamburger.svg
│   ├── logo.svg
│   ├── chand.svg
│   └── suraj.svg
│
├── components/
│   ├── Add.jsx
│   ├── Balance.jsx
│   ├── Cards.jsx
│   ├── Content.jsx
│   ├── Navbar.jsx
│   ├── Table.jsx
│   └── Table.css
│
├── App.jsx
├── index.css
└── main.jsx

---

## ⚙️ How It Works

### - 💰 Initial Income

On the first visit, the user enters their initial income. The amount is saved to Local Storage and the main tracker is then displayed.

### - ➕ Adding Transactions

Users can add a transaction by entering:

- Description
- Amount
- Type — Income or Expense

The corresponding total is automatically updated after adding a transaction.

### - 📊 Balance

The current balance is calculated using:

**Balance = Income − Expense**

### - 📜 Transaction History

Each transaction stores its date, description, amount, and type. New transactions are displayed at the top of the history.

### - 🌙 Dark Mode

Hisab includes a light/dark mode toggle for a more comfortable viewing experience.

---

## 💾 Data Persistence

Hisab uses the browser's **Local Storage** to save:

- Income
- Expense
- Transaction history

This keeps the user's data available even after refreshing the page.

---

## 📱 Responsive Design

The interface uses responsive Tailwind CSS utilities to provide a usable experience across desktop, tablet, and smaller mobile screen sizes.

---

## 🚀 Getting Started

### 1. Clone the repository

git clone - https://github.com/anantasangwan/expense-tracker.git

### 2. Navigate to the project

cd expense-tracker

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

Open the local URL provided by Vite in your browser.

---

## 📚 What I Practiced

- React component-based architecture
- Props and state
- useState
- useRef
- Event handling
- Conditional rendering
- Passing state-update functions through props
- Local Storage
- Form validation
- Dynamic rendering with .map()
- Responsive design with Tailwind CSS
- Dark mode
- CSS custom properties
- Tailwind CSS themes

---

## 🔮 Future Improvements

- ✏️ Edit transactions
- 🗑️ Delete transactions
- 🏷️ Add transaction categories
- 🔍 Filter and sort transactions

---

## 👨‍💻 Author

**Ananta Sangwan**

_BCA Student | Frontend Development_

- GitHub: [@anantasangwan](https://github.com/anantasangwan)
- LinkedIn: [Ananta Sangwan](https://www.linkedin.com/in/anantasangwan/)



