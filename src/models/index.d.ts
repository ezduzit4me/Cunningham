import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerResident = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resident, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly apartment_no?: string | null;
  readonly move_in_date?: string | null;
  readonly mobile_phone?: string | null;
  readonly parking_no?: string | null;
  readonly vehicle_rego?: string | null;
  readonly pet_type?: string | null;
  readonly pet_weight?: string | null;
  readonly storage_no?: string | null;
  readonly re_name?: string | null;
  readonly re_mobile?: string | null;
  readonly re_email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResident = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resident, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly apartment_no?: string | null;
  readonly move_in_date?: string | null;
  readonly mobile_phone?: string | null;
  readonly parking_no?: string | null;
  readonly vehicle_rego?: string | null;
  readonly pet_type?: string | null;
  readonly pet_weight?: string | null;
  readonly storage_no?: string | null;
  readonly re_name?: string | null;
  readonly re_mobile?: string | null;
  readonly re_email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resident = LazyLoading extends LazyLoadingDisabled ? EagerResident : LazyResident

export declare const Resident: (new (init: ModelInit<Resident>) => Resident) & {
  copyOf(source: Resident, mutator: (draft: MutableModel<Resident>) => MutableModel<Resident> | void): Resident;
}