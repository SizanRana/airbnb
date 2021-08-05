import SmallCard from "./SmallCard";

function ExploreNearby({ data }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => (
          <SmallCard
            key={item.img}
            image={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreNearby;
