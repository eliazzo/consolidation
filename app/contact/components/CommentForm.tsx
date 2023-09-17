import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const CommentForm = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("comments")
    .insert({ id: 3, user: "Denmark Jones", comment: "Can I schedule a chat?" })
    .select();

  return (
    <>
    <form className="my-8 p-8">
      <p className="my-8">Alternatively, you can contact me through this form:</p>
      <label>Name</label>
      <input className="border border-gray-900/10 mx-2"></input>
      <label>Message</label>
      <input className="border border-gray-900/10 mx-2"></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Submit</button>
    </form>
    </>
  );
};

export default CommentForm;
