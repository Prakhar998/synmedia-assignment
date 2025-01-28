const request = require("supertest");
const app = require("../src/app");
const Booking = require("../src/models/bookingModel");

describe("Hotel Room Booking System", () => {
  beforeEach(() => {
    // Clear all bookings before each test
    Booking.getAllGuests().forEach((booking) => Booking.cancelBooking(booking.email, booking.roomNumber));
  });

  test("Book a room", async () => {
    const response = await request(app)
      .post("/api/book")
      .send({
        name: "John Doe",
        email: "john@example.com",
        checkIn: "2023-10-01",
        checkOut: "2023-10-05",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.booking.roomNumber).toBeDefined();
  });

  test("View booking details", async () => {
    await request(app).post("/api/book").send({
      name: "Jane Doe",
      email: "jane@example.com",
      checkIn: "2023-10-01",
      checkOut: "2023-10-05",
    });

    const response = await request(app).get("/api/booking/jane@example.com");
    expect(response.statusCode).toBe(200);
    expect(response.body.booking.name).toBe("Jane Doe");
  });

  test("Cancel a booking", async () => {
    const booking = await request(app).post("/api/book").send({
      name: "Alice",
      email: "alice@example.com",
      checkIn: "2023-10-01",
      checkOut: "2023-10-05",
    });

    const response = await request(app).post("/api/cancel").send({
      email: "alice@example.com",
      roomNumber: booking.body.booking.roomNumber,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Booking cancelled successfully");
  });

  test("Modify a booking", async () => {
    const booking = await request(app).post("/api/book").send({
      name: "Bob",
      email: "bob@example.com",
      checkIn: "2023-10-01",
      checkOut: "2023-10-05",
    });

    const response = await request(app).post("/api/modify").send({
      email: "bob@example.com",
      newCheckIn: "2023-10-02",
      newCheckOut: "2023-10-06",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.updatedBooking.checkIn).toBe("2023-10-02");
  });
});