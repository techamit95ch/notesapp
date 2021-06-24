import bcrypt from "bcrypt";
import express from "express";
import otpGenerator from "otp-generator";
import publicIp from "public-ip";
import crypto from "crypto";
import { Agent } from "https";
const AlgorithmToUse = "aes-192-cbc"; //algorithm to use
const AlgoPassword = "xVf*82mnIOmetz89HJGsb";
const AlgoKey = crypto.scryptSync(AlgoPassword, "salt", 24); //create key
const IV = crypto.randomBytes(16); // generate different ciphertext everytime
const Cipher = crypto.createCipheriv(AlgorithmToUse, AlgoKey, IV);
// var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex'); // encrypted text
const DeCipher = crypto.createDecipheriv(AlgorithmToUse, AlgoKey, IV);
var decrypted =
  DeCipher.update(
    "ff4bc3d6a538d3f97bdb8cddea31e7bf7d396588684ba872b5597a483f9f8ea7e28ad81bdbe8dec17d51aa5844ad9763",
    "hex",
    "utf8"
  ) + DeCipher.final("utf8");

console.log(decrypted.toString());
var encrypted = Cipher.update(decrypted, "utf8", "hex") + Cipher.final("hex");
console.log(encrypted.toString());
try {
  decrypted = DeCipher.update(encrypted.toString()) + DeCipher.final("utf8");
  console.log(decrypted.toString());
  decrypted = DeCipher.update(encrypted) + DeCipher.final("utf8");
  //   console.log(decrypted.toString());
} catch (e) {
  //   console.log(e);
}
