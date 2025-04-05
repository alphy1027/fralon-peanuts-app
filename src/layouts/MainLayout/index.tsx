import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="min-h-fit flex-1 py-20">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
