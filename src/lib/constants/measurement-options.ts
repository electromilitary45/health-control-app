import type { SelectOption } from "@/types/common.type";
import type { MeasurementType } from "@/types/measurement.type";

export const MEASUREMENT_TYPE_OPTIONS: SelectOption<MeasurementType>[] = [
    {
        label: "Presión arterial",
        value: "blood_pressure",
    },
    {
        label: "Glucosa",
        value: "glucose",
    },
    {
        label: "Peso",
        value: "weight",
    },
    {
        label: "Frecuencia cardíaca",
        value: "heart_rate",
    },
    {
        label: "Oxígeno en sangre",
        value: "oxygen",
    },
    {
        label: "Temperatura",
        value: "temperature",
    },
];
