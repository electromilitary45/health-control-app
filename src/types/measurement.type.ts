export type MeasurementType =
    | "blood_pressure"
    | "glucose"
    | "weight"
    | "heart_rate"
    | "oxygen"
    | "temperature";

export type MeasurementStatus = "normal" | "warning" | "danger";

export type MeasurementUnit =
    | "mmHg"
    | "mg/dL"
    | "kg"
    | "bpm"
    | "%"
    | "°C";

export type Measurement = {
    id: string;
    patientId: string;
    type: MeasurementType;
    value1: number;
    value2?: number | null;
    unit: MeasurementUnit;
    status: MeasurementStatus;
    notes?: string | null;
    measuredAt: string;
    createdAt: string;
};

export type CreateMeasurementInput = {
    patientId: string;
    type: MeasurementType;
    value1: number;
    value2?: number | null;
    unit: MeasurementUnit;
    notes?: string;
    measuredAt?: string;
};