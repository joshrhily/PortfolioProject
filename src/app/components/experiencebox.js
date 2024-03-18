import Experience from "./experience"

export default function ExperienceBox({ skill = 'Skill' }) {
  return (
    <div className="flex flex-col p-2 m-10 bg-cyan-500 items-center rounded-md border-2 border-cyan-300 shadow-[0_0_25px_rgba(0,200,255,1)]">
      <h1 className="text-2xl">{skill}</h1>
      <Experience title="C++" desc="Most used programming language. Mostly used at Butte College" />
      <Experience title="Python" desc="Second most used programming language. Mostly used in leetcode" />
      <Experience title="JavaScript" desc="Third most used programming language. Used at workplace to write scripts" />
    </div>
  )
}