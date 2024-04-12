const Auction = require("../models/auction");
const Teacher = require("../models/teacher");

const auctionController = {
  createAuction: async (req, res) => {
    try {
      const newAuction = new Auction(req.body);
      await newAuction.save();
      res.status(201).json({
        message: "Auction created successfully",
        auction: newAuction,
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to create auction",
        message: error.message,
      });
    }
  },

  getAllAuctions: async (req, res) => {
    try {
      const auctions = await Auction.find().populate("bidder");
      res.status(200).json(auctions);
    } catch (error) {
      res.status(500).json({
        error: "Failed to retrieve auctions",
        message: error.message,
      });
    }
  },
};

const teacherController = {
  createTeacher: async (req, res) => {
    try {
      const newTeacher = new Teacher(req.body);
      await newTeacher.save();
      res.status(201).json({
        messsage: "Teacher created successfully",
        teacher: newTeacher,
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to create Teacher",
        message: error.message,
      });
    }
  },

  getAllTeachers: async (req, res) => {
    try {
      const Teachers = await Teacher.find();
      res.status(200).json(Teachers);
    } catch (error) {
      res.status(500).json({
        error: "Failed to retrieve bidders",
        message: error.message,
      });
    }
  },
};

module.exports = { auctionController, teacherController };
