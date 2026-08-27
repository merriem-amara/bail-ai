import DashboardShell from "@/components/layout/dashboard-shell";


const stats = [
  {
    title: "Total Cases",
    value: "12",
  },
  {
    title: "Active Cases",
    value: "8",
  },
  {
    title: "Documents",
    value: "34",
  },
];


export default function DashboardPage() {

  return (
    <DashboardShell>

      <div className="space-y-8">

        <section>
          <h1 className="text-3xl font-bold">
            Welcome back, Lawyer
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your criminal litigation workflow with BailAI.
          </p>
        </section>


        <section className="grid gap-5 md:grid-cols-3">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >

              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <p className="mt-3 text-3xl font-bold">
                {item.value}
              </p>

            </div>
          ))}

        </section>


        <section className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold">
            AI Legal Assistant
          </h2>

          <p className="mt-2 text-gray-500">
            Analyze FIRs, research judgments, and prepare legal drafts faster.
          </p>


          <button
            className="mt-5 rounded-lg bg-black px-5 py-2 text-white"
          >
            Open AI Assistant
          </button>

        </section>


      </div>

    </DashboardShell>
  );
}
