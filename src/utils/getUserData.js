import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const getCurrentUserData = async () => {
  const uid = auth.currentUser?.uid;
  if (!uid) return null;

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
};
