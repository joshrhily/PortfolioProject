export default function TitleBox({ name = "First Last", title = "Professional Title", desc = "Description of profession" }) {
  return (
    <div className="flex flex-col border-2 max-w-96 p-4">
      <h1 className="text-5xl">{name}</h1>
      <h2 className="text-3xl">{title}</h2>
      <h3 className="text-lg mt-2">{desc}</h3>
    </div>
  )
}