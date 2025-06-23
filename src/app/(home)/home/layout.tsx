import BottomNavbar from "@/app/_components/BottomNavbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <main>{children}</main>
      <footer>
        <BottomNavbar />
      </footer>
    </main>
  );
}

export default HomeLayout;
