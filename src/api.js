import { ref, set, get, onValue } from "firebase/database";
import db from "@/db.js";

export async function watchMessages(vueReferenceObject) {
  const messagesRef = ref(db, `messages/`);

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    console.log("dvdb - onValue - data", data);
    vueReferenceObject.value = data;
  });
}

/**
 * How the user sends a message when they click send after typing.
 */
export async function createMessage({
  id,
  user,
  message = "Automessage here",
}) {
  const now = new Date();
  const nowUnix = now.getTime();
  try {
    await set(ref(db, `messages/${String(nowUnix)}`), {
      id: String(nowUnix), // Leaves the option open to use id's with letters later.
      content: message,
      time: now.toISOString(),
      user,
    });
    console.log("User message saved successfully");
  } catch (error) {
    console.error("dvdb - createMessage - error", error);
  }
  /**
  Using set() overwrites data at the specified location, including any child nodes.
  See: https://firebase.google.com/docs/database/web/read-and-write
  */
  return;
}
