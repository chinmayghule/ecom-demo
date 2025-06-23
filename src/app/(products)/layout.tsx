import BottomNavbar from "./_components/BottomNavbar";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <main className="overflow-y-scroll">{children}</main>
      <footer>
        <BottomNavbar />
      </footer>
    </main>
  );
}

export default ProductsLayout;
