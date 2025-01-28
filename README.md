A simple Hotel Room Booking System built with Node.js, Express.js, and Jest for unit testing. This project provides APIs for booking rooms, viewing booking details, managing guests, canceling bookings, and modifying bookings.

Features
Book a Room:

Users can book a room by providing their name, email, check-in date, and check-out date.

The system automatically assigns a room number based on availability.

View Booking Details:

Retrieve booking details by providing the guest's email address.

View All Guests:

Get a list of all guests currently staying in the hotel, including their room numbers.

Cancel a Booking:

Guests can cancel their booking by providing their email and room number.

Modify a Booking:

Guests can modify their check-in or check-out dates by providing their email and new dates.

Technologies Used
Node.js: Runtime environment for JavaScript.

Express.js: Web framework for building APIs.

Jest: JavaScript testing framework for unit tests.

Supertest: Library for testing HTTP servers.

Getting Started
Prerequisites
Node.js (v16 or higher)

npm (Node Package Manager)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/Prakhar998/synmedia-assignment.git

cd hotel-booking-system
Install dependencies:

bash
Copy
npm install
Start the server:

bash
Copy
npm start
Run the tests:

bash
Copy
npm test
Start the server in development mode (with auto-restart):

bash
Copy
npm run dev
API Endpoints
Endpoint	Method	Description
/api/book	POST	Book a room.
/api/booking/:email	GET	View booking details by email.
/api/guests	GET	View all guests currently staying in the hotel.
/api/cancel	POST	Cancel a booking.
/api/modify	POST	Modify a booking (check-in/check-out dates).
