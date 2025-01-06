import { z } from "zod";

const create = z.object({
  body: z
    .object({
      name: z.string({
        required_error: "Please provide a name for your artist",
        invalid_type_error: "Name must be a string",
      }),
      description: z
        .string({
          required_error: "Please provide a description for your artist",
          invalid_type_error: "Description must be a string",
        })
        .optional(),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      name: z
        .string({
          required_error: "Please provide a name for your artist",
          invalid_type_error: "Name must be a string",
        })
        .optional(),
      description: z
        .string({
          required_error: "Please provide a description for your artist",
          invalid_type_error: "Description must be a string",
        })
        .optional(),
    })
    .strict(),
});

export default {
  create,
  update,
};
