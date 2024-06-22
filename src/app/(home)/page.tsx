import Navbar from "./components/Navbar/Nav";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />
    </NextUIProvider>
  );
}
