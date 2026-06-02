"use client";

import { useMemo, useState } from "react";
import { MeasurementTypeSelector } from "@/components/measurements/measurement-type-selector";
import { MEASUREMENT_TYPE_OPTIONS } from "@/lib/constants/measurement-options";
import type { MeasurementType } from "@/types/measurement.type";

export function MeasurementTypeSelectorDemo() {
    const [selectedType, setSelectedType] = useState<MeasurementType>();

    const selectedLabel = useMemo(() => {
        return MEASUREMENT_TYPE_OPTIONS.find((option) => option.value === selectedType)
            ?.label;
    }, [selectedType]);

    return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-950">
                    Registrar nueva medición
                </h2>
                <p className="mt-1 text-base text-slate-500">
                    Selecciona qué dato de salud quieres registrar.
                </p>
            </div>

            <MeasurementTypeSelector
                selectedType={selectedType}
                onSelect={setSelectedType}
            />

            {selectedLabel && (
                <p className="mt-4 rounded-2xl bg-blue-50 p-4 text-blue-700">
                    Tipo seleccionado: <strong>{selectedLabel}</strong>
                </p>
            )}
        </section>
    );
}