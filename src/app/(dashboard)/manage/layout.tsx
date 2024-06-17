import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enum";
import PageNotFound from "@/app/not-found";

const AdminLayout =  async({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
    const user = await getUserInfo({userId});
    
    if(user && user.role !== EUserRole.ADMIN) {
        return <PageNotFound></PageNotFound>
    }

    if (!userId) return redirect("/sign-in");

    return <div>{children}</div>;
};

export default AdminLayout;
