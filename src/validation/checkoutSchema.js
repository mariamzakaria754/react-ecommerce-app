import { z } from "zod";

export const createCheckoutSchema = (t) =>
  z.object({
    firstName: z.string().min(2, t.validFirstNameRequired),
    companyName: z.string().optional(),
    streetAddress: z.string().min(5, t.validStreetRequired),
    apartment: z.string().optional(),
    city: z.string().min(2, t.validCityRequired),
    phone: z.string().min(8, t.validPhoneInvalid),
    email: z.string().email(t.validEmailInvalid),
  });
