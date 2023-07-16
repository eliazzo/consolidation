const Blog = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mt-1">Recent activity</h1>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7065610458774282240" height="483" width="704" title="Embedded post"></iframe>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7078032155469041664" height="749" width="704" title="Embedded post" className="mt-3"></iframe>
    </div>
  )
}

export default Blog