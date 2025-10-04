// src/pushOrder.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// order save panna function
export async function pushOrder(order) {
  try {
    await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp(),
      status: "pending",
    });
    console.log("✅ Order placed:", order);
  } catch (err) {
    console.error("❌ Error placing order:", err);
  }
}
