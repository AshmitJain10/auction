const express = require("express");
const router = express.Router();

const {
  auctionController,
  teacherController,
} = require("../controllers/auctionController");
const { pollController } = require("../controllers/pollController");

//  Auction API Calls

router.post("/auctions", auctionController.createAuction);
router.get("/auctions", auctionController.getAllAuctions);

// Teacher API Calls

router.post("/teachers", teacherController.createTeacher);
router.get("/teachers", teacherController.getAllTeachers);

router.post("/api/polls/:id/vote", pollController);

module.exports = router;
