import { z } from "zod";

const create = z.object({
  body: z
    .object({
      companyName: z.string({
        invalid_type_error: "Company name must be a string",
        required_error: "Please provide a company name",
      }),
      avatar: z.string({
        invalid_type_error: "Avatar must be a string",
        required_error: "Please provide an avatar URL",
      }),
      name: z.string({
        invalid_type_error: "Name must be a string",
        required_error: "Please provide your name",
      }),
      message: z.string({
        invalid_type_error: "Message must be a string",
        required_error: "Please provide a message",
      }),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      companyName: z
        .string({
          invalid_type_error: "Company name must be a string",
          required_error: "Please provide a company name",
        })
        .optional(),
      avatar: z
        .string({
          invalid_type_error: "Avatar must be a string",
          required_error: "Please provide an avatar URL",
        })
        .optional(),
      name: z
        .string({
          invalid_type_error: "Name must be a string",
          required_error: "Please provide your name",
        })
        .optional(),
      message: z
        .string({
          invalid_type_error: "Message must be a string",
          required_error: "Please provide a message",
        })
        .optional(),
    })
    .strict(),
});

export default {
  create,
  update,
};
