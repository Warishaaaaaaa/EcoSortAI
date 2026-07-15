function getBadgeColor(category) {
  switch (category.toLowerCase()) {
    case "plastic":
      return "bg-yellow-100 text-yellow-700";

    case "glass":
      return "bg-blue-100 text-blue-700";

    case "paper":
      return "bg-green-100 text-green-700";

    case "metal":
      return "bg-gray-200 text-gray-700";

    case "cardboard":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-red-100 text-red-700";
  }
}

export default function HistoryRow({ item, onDelete }) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">
      <td className="px-6 py-5 font-medium">{item.image_name}</td>

      <td className="px-6 py-5">
        <span
          className={`
            px-3
            py-1
            rounded-full
            text-sm
            font-semibold
            ${getBadgeColor(item.prediction)}
          `}
        >
          {item.prediction}
        </span>
      </td>

      <td className="px-6 py-5">
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{
              width: `${item.confidence}%`,
            }}
          />
        </div>

        <p className="text-sm mt-2">{item.confidence}%</p>
      </td>

      <td className="px-6 py-5">{item.created_at}</td>

      <td className="px-6 py-5">
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
