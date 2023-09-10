const Blog = () => {
  return (
    <>
    <h1 className="mt-8 text-center">Recent activity</h1>
    <div className="flex justify-evenly flex-wrap p-8 h-screen">
      {/* refactor below to remove repetition */}
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7065610458774282240" height="auto" title="Embedded post"></iframe>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7078032155469041664" height="auto" title="Embedded post"></iframe>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7105907591192424449" height="auto" title="Embedded post"></iframe>
    </div>
    </>
  )
}

export default Blog