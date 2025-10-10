import { randomUUID } from "crypto";
import type { Jet, InsertJet, Booking, InsertBooking, Contact, InsertContact } from "@shared/schema";

export interface IStorage {
  // Jets
  getJets(): Promise<Jet[]>;
  getJetById(id: string): Promise<Jet | undefined>;
  createJet(jet: InsertJet): Promise<Jet>;
  
  // Bookings
  getBookings(): Promise<Booking[]>;
  getBookingById(id: string): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private jets: Map<string, Jet>;
  private bookings: Map<string, Booking>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.jets = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
  }

  async getJets(): Promise<Jet[]> {
    return Array.from(this.jets.values());
  }

  async getJetById(id: string): Promise<Jet | undefined> {
    return this.jets.get(id);
  }

  async createJet(insertJet: InsertJet): Promise<Jet> {
    const id = randomUUID();
    const jet: Jet = { ...insertJet, id };
    this.jets.set(id, jet);
    return jet;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBookingById(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      returnDate: insertBooking.returnDate ?? null,
      preferredJetType: insertBooking.preferredJetType ?? null,
      additionalNotes: insertBooking.additionalNotes ?? null,
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
