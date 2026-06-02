import type { ReactNode } from "react";

type PageContainerProps = {
    children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
    return (
        <main className="min-h-screen bg-slate-50 pb-24 text-slate-950">
            <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    );
}