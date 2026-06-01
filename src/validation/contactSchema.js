import { z } from "zod";

export const createContactSchema = (t) =>
  z.object({
    name: z.string().min(3, t.validNameShort),
    email: z.string().min(1, t.validEmailRequired).email(t.validEmailInvalid),
    phone: z.string().min(8, t.validPhoneInvalid),
    message: z.string().min(10, t.validMessageShort),
  });
