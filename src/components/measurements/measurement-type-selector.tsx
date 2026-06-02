"use client";

import { Button } from "@heroui/react";
import type { MeasurementType } from "@/types/measurement.type";
import { MEASUREMENT_TYPE_OPTIONS } from "@/lib/constants/measurement-options";

type MeasurementTypeSelectorProps = {
    selectedType?: MeasurementType;
    onSelect: (type: MeasurementType) => void;
};

export function MeasurementTypeSelector({
    selectedType,
    onSelect,
}: MeasurementTypeSelectorProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MEASUREMENT_TYPE_OPTIONS.map((option) => {
                const isSelected = selectedType === option.value;

                return (
                    <Button
                        key={option.value}
                        className={[
                            "h-auto min-h-20 justify-start whitespace-normal rounded-3xl border px-5 py-4 text-left transition",
                            isSelected
                                ? "border-blue-600 bg-blue-600 text-white shadow-md"
                                : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50",
                        ].join(" ")}
                        variant="bordered"
                        onPress={() => onSelect(option.value)}
                    >
                        <span className="text-base font-semibold">{option.label}</span>
                    </Button>
                );
            })}
        </div>
    );
}