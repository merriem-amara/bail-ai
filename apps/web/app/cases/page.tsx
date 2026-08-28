"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import DashboardShell from "@/components/layout/dashboard-shell";
import { getCases } from "@/services/cases";


export default function CasesPage() {

  const {
    data: cases,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cases"],
    queryFn: getCases,
  });


  return (
    <DashboardShell>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Cases
            </h1>

            <p className="text-gray-500">
              Manage your legal cases.
            </p>
          </div>


          <Link
            href="/cases/new"
            className="rounded-lg bg-black px-5 py-2 text-white"
          >
            Create Case
          </Link>

        </div>


        {isLoading && (
          <div className="rounded-xl border bg-white p-6">
            Loading cases...
          </div>
        )}


        {error && (
          <div className="rounded-xl border bg-white p-6 text-red-600">
            Failed to load cases.
          </div>
        )}


        {cases && cases.length === 0 && (
          <div className="rounded-xl border bg-white p-6">
            No cases found.
          </div>
        )}


        <div className="grid gap-5">

          {cases?.map((item) => (

            <Link
              key={item.id}
              href={`/cases/${item.id}`}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-xl font-semibold">
                    {item.client_name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    FIR: {item.fir_number || "N/A"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Court: {item.court || "N/A"}
                  </p>

                </div>


                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  {item.status}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </DashboardShell>
  );
}
