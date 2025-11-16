"use client";

import React, { useMemo, useState } from "react";

interface ColumnData {
  total: number;
  count: number;
  value: number;
  share: number;
}

interface ColumnDef {
  key: keyof ColumnData | string;
  label: string;
}

const columns: ColumnDef[] = [
  { key: "total", label: "Total" },
  { key: "count", label: "Count" },
  { key: "value", label: "Value" },
  { key: "share", label: "Share" },
];

const rows: ColumnData[] = [
  { total: 2500, count: 1, value: 803, share: 18.2 },
  { total: 1900, count: 2, value: 712, share: 15.4 },

];

const PageSize = 5;

const MainGrid6: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rows.length / PageSize));

  const pageRows = useMemo(() => {
    const start = (page - 1) * PageSize;
    return rows.slice(start, start + PageSize);
  }, [page]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));
  const go = (n: number) => setPage(Math.min(Math.max(1, n), totalPages));

  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="rounded-md bg-card text-card-foreground shadow-sm">
        {/* Header */}
        <div className="flex flex-col space-y-1.5 px-4 py-4 mb-6 border-b border-border border-none pb-0">
          <h3 className="text-xl font-medium leading-none pt-2.5">Own</h3>
        </div>

        {/* Table */}
        <div className="p-6 pt-0 px-0">
          <div className="overflow-x-auto">
            <div className="max-h-80 overflow-hidden">
              <table className="w-full caption-top text-sm">
                <thead className="[&_tr]:border-b bg-default-300">
                  <tr className="border-b border-default-300 transition-colors data-[state=selected]:bg-muted">
                    {columns.map((col) => (
                      <th
                        key={col.key as string}
                        className="px-4 ltr:text-left rtl:text-right last:ltr:text-right last:rtl:text-left align-middle capitalize text-sm font-semibold text-default-600 bg-default-200 h-12 last:text-end last:pr-7"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="[&_tr:last-child]:border-1">
                  {pageRows.map((item, idx) => (
                    <tr
                      key={`${item.total}-${idx}`}
                      className="border-b border-default-300 transition-colors data-[state=selected]:bg-muted hover:bg-default-50"
                      data-state="false"
                    >
                      <td className="p-4 align-middle font-normal text-sm text-default-700 border-b border-default-100 dark:border-border last:text-end last:pr-6">
                        {Intl.NumberFormat().format(item.total)}
                      </td>
                      <td className="p-4 align-middle font-normal text-sm text-default-700 border-b border-default-100 dark:border-border last:text-end last:pr-6">
                        {item.count}
                      </td>
                      <td className="p-4 align-middle font-normal text-sm text-default-700 border-b border-default-100 dark:border-border last:text-end last:pr-6">
                        {Intl.NumberFormat().format(item.value)}
                      </td>
                      <td className="p-4 align-middle font-normal text-sm text-default-700 border-b border-default-100 dark:border-border last:text-end last:pr-6">
                        {item.share}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination (matches your sample) */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <button
                onClick={prev}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer hover:bg-primary/80 h-7 w-7 bg-default-100 text-default-600 hover:text-primary-foreground"
                disabled={page === 1}
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-3.5 h-3.5 rtl:rotate-180"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <ul className="flex space-x-3 rtl:space-x-reverse items-center">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  const active = n === page;
                  return (
                    <li key={n}>
                      <button
                        onClick={() => go(n)}
                        className={[
                          "inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap cursor-pointer h-7 w-7 p-0",
                          active
                            ? "bg-primary text-primary-foreground hover:bg-primary/80"
                            : "bg-default-200 text-default-600 hover:bg-primary/80 hover:text-primary-foreground",
                        ].join(" ")}
                        aria-current={active ? "page" : undefined}
                      >
                        {n}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={next}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer hover:bg-primary/80 h-7 w-7 bg-default-100 text-default-600 hover:text-primary-foreground"
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-3.5 h-3.5 rtl:rotate-180"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid6;
