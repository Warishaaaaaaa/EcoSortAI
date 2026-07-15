export default function CategoryStats({ history }) {
  const counts = {
    cardboard: 0,
    glass: 0,
    metal: 0,
    paper: 0,
    plastic: 0,
  };

  history.forEach((item) => {
    if (counts[item.prediction] !== undefined) {
      counts[item.prediction]++;
    }
  });

  const categories = [
    {
      name: "Cardboard",
      icon: "📦",
      count: counts.cardboard,
    },
    {
      name: "Glass",
      icon: "🍾",
      count: counts.glass,
    },
    {
      name: "Metal",
      icon: "🥫",
      count: counts.metal,
    },
    {
      name: "Paper",
      icon: "📄",
      count: counts.paper,
    },
    {
      name: "Plastic",
      icon: "🥤",
      count: counts.plastic,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Waste Statistics</h2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>

              <span className="font-medium">{category.name}</span>
            </div>

            <span className="text-xl font-bold text-green-600">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
