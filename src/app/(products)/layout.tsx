import BottomNavbar from "../_components/BottomNavbar";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col max-h-screen">
      <main className="">{children}</main>
      <footer className="">
        <BottomNavbar />
      </footer>
    </main>
  );
}

export default ProductsLayout;
