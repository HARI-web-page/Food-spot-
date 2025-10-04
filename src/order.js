import { ref, push } from "firebase/database";
import { db } from "./firebase";

export const pushOrder = (tableNo, items) => {
  const now = Date.now();
  const itemsWithTimestamp = items.map(item => ({
    ...item,
    timestamp: now
  }));

  const newOrder = {
    tableNo,
    items: itemsWithTimestamp,
    status: "placed",
    createdAt: now
  };

  return push(ref(db, "orders"), newOrder);
};
