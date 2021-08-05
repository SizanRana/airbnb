import MediumCard from "./MediumCard";

function LiveAnywhere({ data }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {data.map((item) => (
          <MediumCard key={item.img} image={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default LiveAnywhere;
