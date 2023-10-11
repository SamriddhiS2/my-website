export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="border-b border-gray-800 top-0 bg-gray-900 text-gray-100 z-10">
      <div className="h-14 max-w-7x1 p-4 mx-auto flex items-center justify-between">
        <a href="/" className="font-medium text-lg md:hover:underline">My Website</a>
        <ul className="flex items-center justify-end space-x-4">
          <li className="md:hover:underline">
            <a href="/blog">Blog</a>
          </li>
          <li className="md:hover:underline">
            <a href="/photos">Photos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}