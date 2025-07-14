const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccount.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function seed() {
  const expensesRef = db.collection("expense");
  const userId = "user_12345";
  const userEmail = "admin@admin.com";

  const now = new Date();
  const startYear = now.getFullYear() - 2;

  for (let y = startYear; y <= now.getFullYear(); y++) {
    for (let m = 0; m < 12; m++) {
      const txDate = new Date(y, m, 5, 16, 56, 7);
      const createdAt = Timestamp.fromDate(txDate);

      await expensesRef.add({
        type: "expense",
        selectedType: "wants",
        price: 20,
        label: "coffee",
        createdAt: createdAt,
        uid: userId,
        email: userEmail,
      });

      console.log(`Added expense for ${txDate.toISOString()}`);
    }
  }

  console.log("✅ Seeding completed for 2 years!");
}

seed().catch(console.error);
