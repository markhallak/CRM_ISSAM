export function Header({title}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center px-4">
        {title}
      </div>
    </header>
  );
}
