import BottomNavbar from "../_components/BottomNavbar";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <main className="">{children}</main>
      <footer>
        <BottomNavbar />
      </footer>
    </main>
  );
}

export default ProfileLayout;
