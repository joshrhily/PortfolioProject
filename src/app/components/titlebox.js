export default function TitleBox({ name = "First Last", title = "Professional Title", desc = "Description of profession" }) {
  return (
    <div className="flex flex-col max-w-80 p-4 rounded-lg bg-gradient-radial from-cyan-500 to-cyan-400 border-2 border-cyan-200 shadow-[0_0_9px_rgba(0,200,255,1)] hover:shadow-[0_0_12px_rgba(0,200,255,1)] hover:scale-110 transition">
      <h1 className="text-5xl mb-2">{name}</h1>
      <h2 className="text-2xl">{title}</h2>
      <h3 className="text-lg mt-2">{desc}</h3>
    </div>
  );
}