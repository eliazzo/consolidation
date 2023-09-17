import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DisplayExperience = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: experience } = await supabase.from("experience").select();

  return (
    <>
      {experience?.map((experience) => (
        <div key={experience.id} className="mt-8 flex-col border-b-2 border-bg">
          <h1 className="text-lg">{experience.title}</h1>
          <h2 className="text-slate-700 mt-4">{experience.company}</h2>
          <h2 className="text-slate-700 mt-3">{experience.date}</h2>
          <p className="text-sm mt-2 mb-6">{experience.description}</p>
          <p className="text-xs mt-2 mb-6"><a href={experience.src}>{experience.src}</a></p>
        </div>
      ))}
    </>
  );
};

export default DisplayExperience;
