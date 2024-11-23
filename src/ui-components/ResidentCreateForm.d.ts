/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResidentCreateFormInputValues = {
    name?: string;
    apartment_no?: string;
    move_in_date?: string;
    mobile_phone?: string;
    email?: string;
    parking_no?: string;
    vehicle_rego?: string;
    storage_no?: string;
    pet_type?: string;
    pet_weight?: string;
    re_name?: string;
    re_mobile?: string;
    re_email?: string;
};
export declare type ResidentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    apartment_no?: ValidationFunction<string>;
    move_in_date?: ValidationFunction<string>;
    mobile_phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    parking_no?: ValidationFunction<string>;
    vehicle_rego?: ValidationFunction<string>;
    storage_no?: ValidationFunction<string>;
    pet_type?: ValidationFunction<string>;
    pet_weight?: ValidationFunction<string>;
    re_name?: ValidationFunction<string>;
    re_mobile?: ValidationFunction<string>;
    re_email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResidentCreateFormOverridesProps = {
    ResidentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    apartment_no?: PrimitiveOverrideProps<TextFieldProps>;
    move_in_date?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    mobile_phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    parking_no?: PrimitiveOverrideProps<TextFieldProps>;
    vehicle_rego?: PrimitiveOverrideProps<TextFieldProps>;
    storage_no?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    pet_type?: PrimitiveOverrideProps<TextFieldProps>;
    pet_weight?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    re_name?: PrimitiveOverrideProps<TextFieldProps>;
    re_mobile?: PrimitiveOverrideProps<TextFieldProps>;
    re_email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResidentCreateFormProps = React.PropsWithChildren<{
    overrides?: ResidentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResidentCreateFormInputValues) => ResidentCreateFormInputValues;
    onSuccess?: (fields: ResidentCreateFormInputValues) => void;
    onError?: (fields: ResidentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResidentCreateFormInputValues) => ResidentCreateFormInputValues;
    onValidate?: ResidentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResidentCreateForm(props: ResidentCreateFormProps): React.ReactElement;
