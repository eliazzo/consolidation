import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const CommentForm = async () => {

  const submitComment = await supabase.from("comments").update();
  return (
    <form>
      <label>Name</label>
      <input placeholder="Katie Abbott"></input>
      <label>Comment</label>
      <input></input>
    </form>
  )
}

export default CommentForm