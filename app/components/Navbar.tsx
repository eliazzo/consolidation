const Navbar = () => {
  return (
    <div className="h-20 w-vpw bg-lime-400">
      <ul className="p-5 flex justify-evenly mx-64 font-mono">
      <li><a href="/">Home</a></li>
      <li><a href="/experience">Experience</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/books">Reads</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar