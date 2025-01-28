let bookings = [];

class Booking {
  static bookRoom(guest) {
    const roomNumber = bookings.length + 1; // Auto-assign room number
    const booking = { ...guest, roomNumber };
    bookings.push(booking);
    return booking;
  }

  static getBookingByEmail(email) {
    return bookings.find((booking) => booking.email === email);
  }

  static getAllGuests() {
    return bookings;
  }

  static cancelBooking(email, roomNumber) {
    const index = bookings.findIndex(
      (booking) => booking.email === email && booking.roomNumber === roomNumber
    );
    if (index !== -1) {
      bookings.splice(index, 1);
      return true;
    }
    return false;
  }

  static modifyBooking(email, newCheckIn, newCheckOut) {
    const booking = bookings.find((b) => b.email === email);
    if (booking) {
      booking.checkIn = newCheckIn;
      booking.checkOut = newCheckOut;
      return booking;
    }
    return null;
  }
}

module.exports = Booking;