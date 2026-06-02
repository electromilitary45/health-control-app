type HealthSummaryCardProps = {
    title: string;
    value: string;
    description: string;
    status: "normal" | "warning" | "danger" | "neutral";
};

const statusStyles = {
    normal: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
    danger: "bg-red-50 text-red-700 border-red-200",
    neutral: "bg-slate-50 text-slate-700 border-slate-200",
};

export function HealthSummaryCard({
    title,
    value,
    description,
    status,
}: HealthSummaryCardProps) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-slate-800">{title}</h2>

                <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
                >
                    {status === "normal" && "Normal"}
                    {status === "warning" && "Atención"}
                    {status === "danger" && "Alerta"}
                    {status === "neutral" && "Info"}
                </span>
            </div>

            <p className="text-3xl font-bold text-slate-950">{value}</p>
            <p className="mt-2 text-base text-slate-500">{description}</p>
        </article>
    );
}