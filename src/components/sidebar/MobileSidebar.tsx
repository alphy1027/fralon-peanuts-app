import Sidebar from "./components/Sidebar";

type SidebarProps = {
  closeSidebar: () => void;
};

const MobileSidebar = ({ closeSidebar }: SidebarProps) => {
  return (
    //Sidebar overlay, wrapper to both the backdrop and the sidebar
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* backdrop */}
      <Sidebar closeSidebar={closeSidebar} />
    </div>
  );
};

export default MobileSidebar;
