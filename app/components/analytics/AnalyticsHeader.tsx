"use client";

export default function AnalyticsHeader() {

  function exportReport() {

    const history = JSON.parse(
      localStorage.getItem("promptHistory") || "[]"
    );

    if (history.length === 0) {
      alert("No analytics data available.");
      return;
    }

    const csv = [
      ["Score", "Date"],
      ...history.map((item: any) => [
        item.score,
        new Date(item.date).toLocaleString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "promptpilot-analytics.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>

        <p className="text-sm text-[#4DEAFF]">
          AI Performance Insights
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="mt-3 max-w-xl text-gray-400">
          Monitor prompt quality, AI usage, and productivity from one dashboard.
        </p>

      </div>

      <button
        onClick={exportReport}
        className="rounded-xl bg-[#7C5CFF] px-6 py-3 font-medium text-white transition hover:scale-105"
      >
        Export Report
      </button>

    </div>
  );
}