import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  return (
    <section className="flex min-h-screen w-full flex-col">
      <AnimatePresence>{isSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}</AnimatePresence>
      <Header openSidebar={openSidebar} />
      <main className="min-h-fit flex-1 pt-8 pb-20">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
