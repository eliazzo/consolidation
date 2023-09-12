const Navbar = () => {
  return (
    <div className="h-20 w-vpw border-b-2 border-bg">
      <ul className="p-5 flex justify-evenly mx-64 font-mono">
      <li className="mx-2"><a href="/">Home</a></li>
      <li className="mx-2"><a href="/experience">Experience</a></li>
      <li className="mx-2"><a href="/blog">Blog</a></li>
      <li className="mx-2"><a href="/books">Reads</a></li>
      <li className="mx-2"><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar