import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  addContact: async (_name: string, _phone: string, _requirement: string) => true,
  getContacts: async () => [
    {
      id: BigInt(1),
      name: "Rahul Sharma",
      phone: "9876543210",
      requirement: "3BHK in South Delhi, budget 1.5Cr",
      timestamp: BigInt(Date.now()),
    },
    {
      id: BigInt(2),
      name: "Priya Mehta",
      phone: "9812345678",
      requirement: "Investment property in Gurugram, budget 80L",
      timestamp: BigInt(Date.now()),
    },
  ],
};
