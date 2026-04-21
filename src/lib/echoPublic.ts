import Echo from "laravel-echo";
import Pusher from "pusher-js";

export function getEcho() {
  if (typeof window === "undefined") return null;

  (window as any).Pusher = Pusher;

  return new Echo({
    broadcaster: "reverb",
    key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,

    wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
    wsPort: 8080,
    wssPort: 8080,

    forceTLS: false,
    enabledTransports: ["ws", "wss"],
  });
}
