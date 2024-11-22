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
export declare type ResidentUpdateFormInputValues = {
    name?: string;
    apartment_no?: string;
    move_in_date?: string;
    mobile_phone?: string;
    parking_no?: string;
    vehicle_rego?: string;
    pet_type?: string;
    pet_weight?: string;
    storage_no?: string;
    re_name?: string;
    re_mobile?: string;
    re_email?: string;
    email?: string;
};
export declare type ResidentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    apartment_no?: ValidationFunction<string>;
    move_in_date?: ValidationFunction<string>;
    mobile_phone?: ValidationFunction<string>;
    parking_no?: ValidationFunction<string>;
    vehicle_rego?: ValidationFunction<string>;
    pet_type?: ValidationFunction<string>;
    pet_weight?: ValidationFunction<string>;
    storage_no?: ValidationFunction<string>;
    re_name?: ValidationFunction<string>;
    re_mobile?: ValidationFunction<string>;
    re_email?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResidentUpdateFormOverridesProps = {
    ResidentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    apartment_no?: PrimitiveOverrideProps<TextFieldProps>;
    move_in_date?: PrimitiveOverrideProps<TextFieldProps>;
    mobile_phone?: PrimitiveOverrideProps<TextFieldProps>;
    parking_no?: PrimitiveOverrideProps<TextFieldProps>;
    vehicle_rego?: PrimitiveOverrideProps<TextFieldProps>;
    pet_type?: PrimitiveOverrideProps<TextFieldProps>;
    pet_weight?: PrimitiveOverrideProps<TextFieldProps>;
    storage_no?: PrimitiveOverrideProps<TextFieldProps>;
    re_name?: PrimitiveOverrideProps<TextFieldProps>;
    re_mobile?: PrimitiveOverrideProps<TextFieldProps>;
    re_email?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResidentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResidentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resident?: any;
    onSubmit?: (fields: ResidentUpdateFormInputValues) => ResidentUpdateFormInputValues;
    onSuccess?: (fields: ResidentUpdateFormInputValues) => void;
    onError?: (fields: ResidentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResidentUpdateFormInputValues) => ResidentUpdateFormInputValues;
    onValidate?: ResidentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResidentUpdateForm(props: ResidentUpdateFormProps): React.ReactElement;
