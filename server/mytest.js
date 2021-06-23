import bcrypt from "bcrypt";
import express from "express";
import otpGenerator from "otp-generator";
import publicIp from "public-ip";

const ip = async () => {
  try {
    const ipV4 = await publicIp.v4();    
    console.log("ipv4",ipV4);
    const ipV6 = await publicIp.v6();
    console.log("ipv6",ipV6);
  } catch (e) {
    console.log(e);
  }
};
ip();
