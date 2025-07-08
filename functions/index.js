/**
 * Starter Firebase Cloud Function
 * Replace this with your real code later!
 */

import { https } from "firebase-functions";
import { initializeApp } from "firebase-admin";

initializeApp();

export const helloWorld = https.onRequest((request, response) => {
  response.send("Hello from Brokeless Cloud Functions!");
});