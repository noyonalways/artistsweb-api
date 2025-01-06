import { z } from "zod";

const createHighlight = z.object({
  title: z.string({
    required_error: "The title of the highlight is required.",
  }),
  value: z.string({
    required_error: "The value of the highlight is required.",
  }),
});

const create = z.object({
  body: z
    .object({
      heading: z.string({
        required_error: "The heading for the hero section is required.",
      }),
      subheading: z.string({
        required_error: "The subheading for the hero section is required.",
      }),
      highlights: z
        .array(createHighlight)
        .min(1, "At least one highlight is required in the hero section."),
    })
    .strict(),
});

const updateHighlight = z.object({
  title: z
    .string({
      required_error: "The title of the highlight is required.",
    })
    .optional(),
  value: z
    .string({
      required_error: "The value of the highlight is required.",
    })
    .optional(),
});

const update = z.object({
  body: z
    .object({
      heading: z
        .string({
          required_error: "The heading for the hero section is required.",
        })
        .optional(),
      subheading: z
        .string({
          required_error: "The subheading for the hero section is required.",
        })
        .optional(),
      highlights: z.array(updateHighlight).optional(),
    })
    .strict(),
});

export default {
  create,
  update,
};
