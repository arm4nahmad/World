import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the routed page content */}
      </main>
      <Footer />
    </>
  );
};
