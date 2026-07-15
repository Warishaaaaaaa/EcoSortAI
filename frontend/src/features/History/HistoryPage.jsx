import { useEffect, useMemo, useState } from "react";

import { getHistory, deleteHistory, clearHistory } from "./HistoryService";

import HistorySearch from "./HistorySearch";
import HistoryTable from "./HistoryTable";
import CategoryPieChart from "./CategoryPieChart";
import CategoryStats from "./CategoryStats";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const data = await getHistory();
      setHistory(data);
    } catch (error) {
      console.error("Failed to load history:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this prediction?",
    );

    if (!confirmed) return;

    try {
      await deleteHistory(id);

      setHistory((previousHistory) =>
        previousHistory.filter((item) => item.id !== id),
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete prediction.");
    }
  }

  async function handleClearHistory() {
    const confirmed = window.confirm("Delete ALL prediction history?");

    if (!confirmed) return;

    try {
      await clearHistory();
      setHistory([]);
    } catch (error) {
      console.error(error);
      alert("Unable to clear history.");
    }
  }

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.image_name.toLowerCase().includes(keyword) ||
        item.prediction.toLowerCase().includes(keyword)
      );
    });
  }, [history, search]);

  const totalPredictions = history.length;

  const averageConfidence =
    history.length === 0
      ? 0
      : (
          history.reduce((sum, item) => sum + item.confidence, 0) /
          history.length
        ).toFixed(1);

  const mostCommonCategory = (() => {
    if (history.length === 0) return "-";

    const counts = {};

    history.forEach((item) => {
      counts[item.prediction] = (counts[item.prediction] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b,
    );
  })();

  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">Prediction History</h1>

        <p className="text-slate-500 mb-10">
          Browse all predictions made by EcoSortAI.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-slate-500">Total Predictions</h3>

            <p className="text-4xl font-bold mt-3 text-green-600">
              {totalPredictions}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-slate-500">Most Common</h3>

            <p className="text-3xl font-bold capitalize mt-3 text-blue-600">
              {mostCommonCategory}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-slate-500">Average Confidence</h3>

            <p className="text-4xl font-bold mt-3 text-purple-600">
              {averageConfidence}%
            </p>
          </div>
        </div>

        <HistorySearch search={search} setSearch={setSearch} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <CategoryPieChart history={history} />
          <CategoryStats history={history} />
        </div>

        <div className="flex justify-end mt-8 mb-6">
          <button
            onClick={handleClearHistory}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
          >
            Clear All History
          </button>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
            <p className="text-lg font-medium">Loading prediction history...</p>
          </div>
        ) : filteredHistory.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
            <div className="text-6xl mb-6">♻️</div>

            <h2 className="text-3xl font-bold">No Prediction History</h2>

            <p className="text-slate-500 mt-4">
              Your predictions will appear here after you classify your first
              waste image.
            </p>
          </div>
        ) : (
          <HistoryTable history={filteredHistory} onDelete={handleDelete} />
        )}
      </div>
    </main>
  );
}
