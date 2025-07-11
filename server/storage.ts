import { registrations, contacts, type Registration, type Contact, type InsertRegistration, type InsertContact } from "@shared/schema";

export interface IStorage {
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  createContact(contact: InsertContact): Promise<Contact>;
  getRegistrations(): Promise<Registration[]>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private registrations: Map<number, Registration>;
  private contacts: Map<number, Contact>;
  private currentRegistrationId: number;
  private currentContactId: number;

  constructor() {
    this.registrations = new Map();
    this.contacts = new Map();
    this.currentRegistrationId = 1;
    this.currentContactId = 1;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.currentRegistrationId++;
    const registration: Registration = {
      ...insertRegistration,
      id,
      createdAt: new Date(),
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
