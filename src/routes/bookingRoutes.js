const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/book", bookingController.bookRoom);
router.get("/booking/:email", bookingController.viewBookingDetails);
router.get("/guests", bookingController.viewAllGuests);
router.post("/cancel", bookingController.cancelBooking);
router.post("/modify", bookingController.modifyBooking);

module.exports = router;