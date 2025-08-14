/* This file is part of Libre Invites.
 *
 * Copyright (C) 2025 Olivér Pirger
 *
 * Libre Invites is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation.
 *
 * Libre Invites is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Libre Invites. If not, see <https://www.gnu.org/licenses/>.
 */

import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "@/lib/schema";

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
    handler: async (input, { locals }) => {
      const db = drizzle(locals.runtime.env.DB, { schema });
      const result = await db.query.event.findMany();
      console.debug(result);
      console.debug(JSON.stringify(input));
    },
  }),
};
