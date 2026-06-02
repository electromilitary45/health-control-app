import { Button } from "@heroui/react";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6">
      <section className="mx-auto max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Control de Salud</h1>

        <p className="mt-4 text-lg">
          App para registrar presión, glucosa, medicamentos y alertas.
        </p>

        <Button className="mt-6" color="primary" size="lg">
          Registrar medición
        </Button>
      </section>
    </main>
  );
}