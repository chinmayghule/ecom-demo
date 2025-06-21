function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid place-items-center sm:bg-gray-50">
      {children}
    </main>
  );
}

export default AuthLayout;
