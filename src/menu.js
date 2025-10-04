// src/menu.js
import { db } from './firebase';
import { ref, get, push, update } from "firebase/database";

// Get all menu items
export async function getMenu() {
  const menuRef = ref(db, "menu");
  const snapshot = await get(menuRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.keys(data).map(key => ({ id: key, ...data[key] }));
  } else {
    return [];
  }
}

// Add new menu item
export async function addMenuItem(item) {
  const menuRef = ref(db, "menu");
  await push(menuRef, item);
}

// Update menu item
export async function updateMenuItem(id, data) {
  const itemRef = ref(db, `menu/${id}`);
  await update(itemRef, data);
}
