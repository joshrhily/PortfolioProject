export default function Experience({ title = 'Experience', desc = 'Experience description'}) {
  return (
    <div className="flex flex-col bg-cyan-900 rounded-lg bg-opacity-20 p-4 m-2  max-w-sm">
      <h1>{title}</h1>
      <p>{desc}</p>
      </div>
  )
}