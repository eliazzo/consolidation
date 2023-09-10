import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const CommentForm = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
  .from('comments')
  .insert({ id: 3, user: 'Denmark Jones', comment: 'Can I schedule a chat?' })
  .select()

  console.log(data)
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