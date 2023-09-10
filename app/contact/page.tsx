import CommentForm from "./components/CommentForm"
import DisplayComments from "./components/DisplayComments"

const Comment = () => {
  return (
    <>
    <h1 className="text-center mt-8">Get in touch</h1>
    <div className="flex-col border-black border-2 p-8">
    <CommentForm/>
    <DisplayComments/>
    </div>
    </>
  )
}

export default Comment