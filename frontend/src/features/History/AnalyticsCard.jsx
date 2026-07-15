export default function AnalyticsCard({
  title,
  value,
  color = "text-green-600",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>{value}</h2>
    </div>
  );
}
