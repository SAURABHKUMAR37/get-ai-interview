import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

let razorpay = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} else {
  // Don't crash the whole server just because payments aren't configured yet.
  // Payment routes will return a clear error instead (see payment.controller.js).
  console.warn(
    "⚠️  RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET not set — payment features are disabled until you add them to server/.env"
  );
}

export default razorpay;