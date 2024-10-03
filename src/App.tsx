import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const connectSocket = () => {
    const token: {
      transports: string[];
      withCredentials: boolean;
      secure: boolean;
      reconnection: boolean;
      auth?: { token: string | undefined };
    } = {
      transports: ["websocket"],
      withCredentials: true,
      secure: false,
      reconnection: true,
    };

    const socket = io("https://10.10.11.72:9090", {
      ...token,
    });
    console.log(socket);
    return socket;
  };

  useEffect(() => {
    connectSocket();
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + WebSocket</h1>
    </>
  );
}

export default App;
