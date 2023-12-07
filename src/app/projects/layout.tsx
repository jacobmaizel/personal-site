export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col overflow-hidden justify-center w-screen">
      {children}
    </main>
  );
}
