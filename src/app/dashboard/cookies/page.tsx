import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value ?? "1";
  // const allCookies = cookieStore.getAll();

  return (
    <div>
      <span className="text-3xl">Tabs</span>
      <hr className="mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TabBar currentTab={+cookieTab} />
        {/* {JSON.stringify(allCookies)} */}
      </div>
    </div>
  );
}
