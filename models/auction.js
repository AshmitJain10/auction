const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auctiondetSchema = new Schema({
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  startTime: {
    type: Date,
    default: null,
  },
  endTime: {
    type: Date,
    default: null,
  },
  currentHighestBid: {
    type: Number,
    default: 0,
  },
  auctionDate: {
    type: Date,
    required: true,
  },
});

auctiondetSchema.pre("save", function (next) {
  if (this.startTime && !this.endTime) {
    this.endTime = new Date(this.startTime.getTime() + 72 * 60 * 60 * 1000);
  }
  next();
});

const Auction = mongoose.model("Auction", auctiondetSchema);

module.exports = Auction;
