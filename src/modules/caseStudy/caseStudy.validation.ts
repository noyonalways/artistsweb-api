import mongoose from "mongoose";
import { z } from "zod";

const create = z.object({
  body: z
    .object({
      service: z
        .string({
          invalid_type_error: "Service ID must be string",
          required_error: "Service ID is required",
        })
        .refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Service ID",
        }),
      name: z.string({
        invalid_type_error: "Name must be a string",
        required_error: "Case Study name is required",
      }),
      image: z.string({
        invalid_type_error: "Image must be a string",
        required_error: "Image is required",
      }),
      brief: z
        .string({
          invalid_type_error: "Brief must be a string",
          required_error: "Brief is required",
        })
        .optional(),
      isLatest: z.boolean().optional(),
    })
    .strict(),
});

const update = z.object({
  body: z
    .object({
      service: z
        .string({
          invalid_type_error: "Service ID must be string",
          required_error: "Service ID is required",
        })
        .refine((val) => mongoose.Types.ObjectId.isValid(val), {
          message: "Invalid Service ID",
        })
        .optional(),
      name: z
        .string({
          invalid_type_error: "Name must be a string",
          required_error: "Case Study name is required",
        })
        .optional(),
      image: z
        .string({
          invalid_type_error: "Image must be a string",
          required_error: "Image is required",
        })
        .optional(),
      brief: z
        .string({
          invalid_type_error: "Brief must be a string",
          required_error: "Brief is required",
        })
        .optional(),
      isLatest: z.boolean().optional(),
    })
    .strict(),
});

export default {
  create,
  update,
};
