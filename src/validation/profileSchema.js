import { z } from "zod";

export const createProfileSchema = (t) =>
  z
    .object({
      firstName: z.string().min(2, t.validFirstNameShort),
      lastName: z.string().min(2, t.validLastNameShort),
      email: z.string().email(t.validEmailInvalid),
      address: z.string().min(5, t.validAddressRequired),
      currentPassword: z.string().optional(),
      newPassword: z.string().optional(),
      confirmPassword: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      const hasPassword =
        data.currentPassword || data.newPassword || data.confirmPassword;

      if (!hasPassword) return;

      if (!data.currentPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["currentPassword"],
          message: t.validCurrentPasswordRequired,
        });
      }

      if (!data.newPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["newPassword"],
          message: t.validNewPasswordRequired,
        });
      }

      if (data.newPassword && data.newPassword.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["newPassword"],
          message: t.validPasswordLength,
        });
      }

      if (data.newPassword !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["confirmPassword"],
          message: t.validPasswordsNoMatch,
        });
      }
    });

export const profileSchema = createProfileSchema({
  validFirstNameShort: "First name must be at least 2 characters",
  validLastNameShort: "Last name must be at least 2 characters",
  validEmailInvalid: "Please enter a valid email",
  validAddressRequired: "Address is required",
  validCurrentPasswordRequired: "Current password is required",
  validNewPasswordRequired: "New password is required",
  validPasswordLength: "Password must be at least 8 characters",
  validPasswordsNoMatch: "Passwords do not match",
});
