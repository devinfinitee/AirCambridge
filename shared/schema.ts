import { z } from "zod";

// Jet Schema
export const jetSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  capacity: z.number(),
  range: z.string(),
  speed: z.string(),
  hourlyRate: z.number(),
  image: z.string(),
});

export const insertJetSchema = jetSchema.omit({ id: true });

// Booking Schema
export const bookingSchema = z.object({
  id: z.string(),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  departureCity: z.string().min(1, "Departure city is required"),
  destination: z.string().min(1, "Destination is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  returnDate: z.string().optional(),
  passengers: z.number().min(1, "At least 1 passenger required"),
  preferredJetType: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export const insertBookingSchema = bookingSchema.omit({ id: true });

// Contact Schema
export const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const insertContactSchema = contactSchema.omit({ id: true });

// Type exports
export type Jet = z.infer<typeof jetSchema>;
export type InsertJet = z.infer<typeof insertJetSchema>;

export type Booking = z.infer<typeof bookingSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;

export type Contact = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
