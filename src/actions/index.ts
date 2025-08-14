import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  createEvent: defineAction({
    accept: "form",
    input: z.object({
      title: z.string().optional(),
      location: z.string().optional(),
      start: z.string(),
      end: z.string(),
      url: z.string().optional(),
      notes: z.string().optional(),
    }),
    handler: async (input) => {
      console.debug(JSON.stringify(input));
    },
  }),
};
