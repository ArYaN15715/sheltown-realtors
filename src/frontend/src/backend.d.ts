import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    id: bigint;
    name: string;
    requirement: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    addContact(name: string, phone: string, requirement: string): Promise<boolean>;
    getContacts(): Promise<Array<Contact>>;
}
