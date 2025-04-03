import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="min-h-screen flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
