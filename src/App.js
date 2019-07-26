import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import LocationCard from "./components/LocationCard.js";
import Locationslist from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
      <Locationslist />
      <LocationCard />
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
