# StyleFleet (Cloth Rental Platform)

StyleFleet is a MERN stack platform for buying and renting clothes. It supports both traditional purchases and a flexible rental system for fashion items.

## Features
- User authentication (sign up, login, logout)
- Product catalog with categories
- Admin dashboard for product management
- Shopping cart and checkout (Stripe integration)
- **Rental functionality:**
  - Products can be marked as rentable by admins
  - Users can choose to buy or rent items
  - Rental period selection and rental pricing
  - Rental details are tracked in cart and orders
- Coupon/voucher support
- Order and rental history

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Payments:** Stripe

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB

### Installation
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd stylefleet
   ```
2. **Install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the backend folder and fill in your MongoDB URI, Stripe keys, etc.
4. **Run the app:**
   - **Backend:**
     ```sh
     cd backend
     npm run dev
     ```
   - **Frontend:**
     ```sh
     cd frontend
     npm run dev
     ```
5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)

## Rental Functionality
- Admins can set `isRentable`, `rentalPrice`, and `rentalPeriodOptions` when creating/editing products.
- Users can select "Buy" or "Rent" on product cards. If renting, they choose a rental period.
- Cart and checkout flows support both purchases and rentals.
- Rental details are stored in orders for future management.

## Folder Structure
- `backend/` — Express API, models, controllers, routes
- `frontend/` — React app, components, state management

## License
MIT 
