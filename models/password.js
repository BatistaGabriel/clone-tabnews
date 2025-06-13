import bcryptjs from "bcryptjs";
import crypto from "node:crypto";

const PEPPER = process.env.PEPPER;

async function hash(password) {
  const rounds = getNumberOfRounds();
  const pepperedPassword = applyPepper(password);
  return await bcryptjs.hash(pepperedPassword, rounds);
}

async function compare(providedPassword, storedPassword) {
  const pepperedPassword = applyPepper(providedPassword);
  return await bcryptjs.compare(pepperedPassword, storedPassword);
}

function applyPepper(password) {
  return crypto.createHmac("sha256", PEPPER).update(password).digest("hex");
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

const password = {
  hash,
  compare,
};

export default password;
