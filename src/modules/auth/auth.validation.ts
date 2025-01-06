import { z } from "zod";

const login = z.object({
  body: z
    .object({
      email: z
        .string({
          invalid_type_error: "Email must be string",
          required_error: "Please enter your email address",
        })
        .email("Please provide a valid email address"),
      password: z.string({
        invalid_type_error: "Password must be string",
        required_error: "Please enter your password",
      }),
    })
    .strict(),
});

export default {
  login,
};
