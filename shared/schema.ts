import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const jets = pgTable("jets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(),
  capacity: integer("capacity").notNull(),
  range: text("range").notNull(),
  speed: text("speed").notNull(),
  hourlyRate: integer("hourly_rate").notNull(),
  image: text("image").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  departureCity: text("departure_city").notNull(),
  destination: text("destination").notNull(),
  departureDate: text("departure_date").notNull(),
  returnDate: text("return_date"),
  passengers: integer("passengers").notNull(),
  preferredJetType: text("preferred_jet_type"),
  additionalNotes: text("additional_notes"),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertJetSchema = createInsertSchema(jets).omit({
  id: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
});

export type InsertJet = z.infer<typeof insertJetSchema>;
export type Jet = typeof jets.$inferSelect;

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
