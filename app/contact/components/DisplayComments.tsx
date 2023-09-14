import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DisplayComments = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: comments } = await supabase.from("comments").select();

  return (
    <ul className="my-auto">
      <h1>Comments list</h1>
      {comments?.map((comment) => (
        <li key={comment.user}>{comment.comment}</li>
      ))}
    </ul>
  );
};

export default DisplayComments;
