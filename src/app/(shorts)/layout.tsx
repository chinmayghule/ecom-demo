import BottomNavbar from "../_components/BottomNavbar";

function ShortsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <main className="">{children}</main>
      <footer>
        <BottomNavbar />
      </footer>
    </main>
  );
}

export default ShortsLayout;
