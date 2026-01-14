import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    verifyToken: { type: String },
    forgotPasswordToken: { type: String },
    isValid: { type: Boolean, default: false },
    kyc: { type: Boolean, default: false },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true },
    country: { type: String },
    address: { type: String },
    referralID: { type: String },
    password: { type: String, required: true },
    random: { type: String, default: "" },
    total: { type: Number },
    allowtransfer: { type: Boolean, default: false },
    limit: { type: Number, default: 3000 },
    transactions: [
      {
        name: { type: String },
        date: { type: String },
        amount: { type: Number },
        deposit: { type: Boolean, default: false },
        withdraw: { type: Boolean, default: false },
        pending: { type: Boolean, default: false },
      },
    ],
    referrals: [
      {
        username: { type: String },
        date: { type: String, default: new Date().toISOString().split("T")[0] },
      },
    ],
    // roi: [
    //   {
    //     date: { type: String },
    //     amount: { type: Number },
    //   },
    // ],

    // plans: [
    //   {
    //     date: { type: String },
    //     standard: { type: Boolean, default: false },
    //     advanced: { type: Boolean, default: false },
    //     nfp: { type: Boolean, default: false },
    //     btc: { type: Boolean, default: false },
    //   },
    // ],
    // proof: [],
    // files: {
    //   ID: { type: String },
    //   passport: { type: String },
    // },
  },
  {
    timestamps: true,
  },
);

const userdb = mongoose.models.user || mongoose.model("user", userSchema);

export default userdb;
