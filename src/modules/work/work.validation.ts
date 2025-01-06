import { z } from "zod";

const create = z.object({
  body: z
    .object({
      title: z.string({
        invalid_type_error: "Title must be string",
        required_error: "Please enter a title for your work",
      }),
      image: z.string({
        invalid_type_error: "Image must be a string",
        required_error: "Please provide an image for your work",
      }),
      isLatest: z
        .boolean({
          invalid_type_error: "IsLatest must be a boolean",
          required_error: "Please indicate if this work is the latest",
        })
        .optional(),
      tags: z.array(
        z.string({
          invalid_type_error: "Tag must be a string",
          required_error: "Please provide at least one tag for your work",
        }),
        {
          required_error: "Please provide at least one tag for your work",
          invalid_type_error: "Tags must be an array of strings",
        },
      ),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      title: z
        .string({
          invalid_type_error: "Title must be string",
          required_error: "Please enter a title for your work",
        })
        .optional(),
      image: z
        .string({
          invalid_type_error: "Image must be a string",
          required_error: "Please provide an image for your work",
        })
        .optional(),
      isLatest: z
        .boolean({
          invalid_type_error: "IsLatest must be a boolean",
          required_error: "Please indicate if this work is the latest",
        })
        .optional(),
      tags: z
        .array(
          z.string({
            invalid_type_error: "Tag must be a string",
            required_error: "Please provide at least one tag for your work",
          }),
          {
            required_error: "Please provide at least one tag for your work",
            invalid_type_error: "Tags must be an array of strings",
          },
        )
        .optional(),
    })
    .strict(),
});

export default {
  create,
  update,
};
