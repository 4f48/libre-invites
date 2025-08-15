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

import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";

export const event = sqliteTable("event", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  location: text("location"),
  allDay: int("allday", { mode: "boolean" }).notNull(),
  start: int("start", { mode: "timestamp" }).notNull(),
  end: int("end", { mode: "timestamp" }).notNull(),
  url: text("url"),
  notes: text("notes"),
});
