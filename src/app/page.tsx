import { Button } from "@heroui/react";
import { AppHeader } from "@/components/layout/app-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { HealthSummaryCard } from "@/components/ui/health-summary-card";

export default function HomePage() {
  return (
    <>
      <PageContainer>
        <AppHeader />

        <section className="mb-6 rounded-3xl bg-blue-600 p-6 text-white shadow-sm">
          <p className="text-base font-medium text-blue-100">Hoy</p>
          <h2 className="mt-2 text-3xl font-bold">
            ¿Cómo está tu salud hoy?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            Registra tus mediciones, revisa tus medicamentos y mantén a tu
            familia informada.
          </p>

          <Button className="mt-6 w-full sm:w-auto" color="primary" size="lg">
            Registrar medición
          </Button>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <HealthSummaryCard
            title="Presión arterial"
            value="120/80"
            description="Última medición registrada"
            status="normal"
          />

          <HealthSummaryCard
            title="Glucosa"
            value="105 mg/dL"
            description="Registro de esta mañana"
            status="normal"
          />

          <HealthSummaryCard
            title="Medicamentos"
            value="2 pendientes"
            description="Próxima toma a las 8:00 p.m."
            status="warning"
          />

          <HealthSummaryCard
            title="Alertas"
            value="0 activas"
            description="No hay alertas importantes"
            status="neutral"
          />
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Acciones rápidas
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button size="lg" variant="bordered">
                Registrar presión
              </Button>
              <Button size="lg" variant="bordered">
                Registrar glucosa
              </Button>
              <Button size="lg" variant="bordered">
                Marcar medicamento
              </Button>
              <Button size="lg" variant="bordered">
                Ver historial
              </Button>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Próximos recordatorios
            </h2>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Losartán</p>
                <p className="text-slate-500">Hoy, 8:00 p.m.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">
                  Medición de presión
                </p>
                <p className="text-slate-500">Mañana, 7:00 a.m.</p>
              </div>
            </div>
          </article>
        </section>
      </PageContainer>

      <MobileBottomNav />
    </>
  );
}