export default function HistorySearch({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by image name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        rounded-xl
        border
        border-slate-300
        px-5
        py-3
        outline-none
        focus:ring-2
        focus:ring-green-500
      "
      />
    </div>
  );
}
