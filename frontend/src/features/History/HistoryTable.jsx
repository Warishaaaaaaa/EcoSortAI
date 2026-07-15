import HistoryRow from "./HistoryRow";

export default function HistoryTable({ history, onDelete }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Image</th>

            <th className="px-6 py-4 text-left">Category</th>

            <th className="px-6 py-4 text-left">Confidence</th>

            <th className="px-6 py-4 text-left">Date</th>

            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <HistoryRow key={item.id} item={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
