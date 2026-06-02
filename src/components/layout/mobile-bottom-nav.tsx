const navItems = [
    {
        label: "Inicio",
        icon: "🏠",
    },
    {
        label: "Registrar",
        icon: "➕",
    },
    {
        label: "Historial",
        icon: "📋",
    },
    {
        label: "Alertas",
        icon: "🔔",
    },
];

export function MobileBottomNav() {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white px-2 py-2 shadow-lg md:hidden">
            <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className="flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                        type="button"
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="mt-1 text-xs">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}