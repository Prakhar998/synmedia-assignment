const Booking = require("../models/bookingModel");

exports.bookRoom = (req, res) => {
  const { name, email, checkIn, checkOut } = req.body;
  if (!name || !email || !checkIn || !checkOut) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const guest = { name, email, checkIn, checkOut };
  const booking = Booking.bookRoom(guest);

  res.status(201).json({
    message: "Room booked successfully",
    booking,
  });
};

exports.viewBookingDetails = (req, res) => {
  const { email } = req.params;
  const booking = Booking.getBookingByEmail(email);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  res.status(200).json({ booking });
};

exports.viewAllGuests = (req, res) => {
  const guests = Booking.getAllGuests();
  res.status(200).json({ guests });
};

exports.cancelBooking = (req, res) => {
  const { email, roomNumber } = req.body;
  const isCancelled = Booking.cancelBooking(email, roomNumber);

  if (!isCancelled) {
    return res.status(404).json({ message: "Booking not found" });
  }

  res.status(200).json({ message: "Booking cancelled successfully" });
};

exports.modifyBooking = (req, res) => {
  const { email, newCheckIn, newCheckOut } = req.body;
  const updatedBooking = Booking.modifyBooking(email, newCheckIn, newCheckOut);

  if (!updatedBooking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  res.status(200).json({ message: "Booking updated successfully", updatedBooking });
};