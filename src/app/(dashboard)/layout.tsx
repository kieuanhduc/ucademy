
import Sidebar from "@/components/layout/Sidebar";
import SidebarTop from "@/components/layout/SidebarTop";

const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="grid grid-cols-1 pt-8 xl:pt-0 xl:w-[calc(100%-300px)] ml-auto lg:min-h-screen relative items-start">
      <Sidebar />
      <main className="p-5">
        <SidebarTop></SidebarTop>
        {children}
      </main>
    </div>
  );
};

export default layout;
