const TitleBox = ({ name = "First Last", title = "Professional Title", desc = "Description of profession" }) => {
  return (
    <div className="flex flex-col max-w-96 p-4 rounded-lg bg-gradient-radial from-cyan-500 to-cyan-400 border-2 transition ease-in-out hover:scale-110">
      <h1 className="text-5xl mb-2">{name}</h1>
      <h2 className="text-2xl">{title}</h2>
      <h3 className="text-lg mt-2">{desc}</h3>
    </div>
  );
};
export default TitleBox;