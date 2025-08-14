PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_event` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`location` text,
	`allday` integer DEFAULT false NOT NULL,
	`start` integer NOT NULL,
	`end` integer NOT NULL,
	`url` text,
	`notes` text
);
--> statement-breakpoint
INSERT INTO `__new_event`("id", "title", "location", "allday", "start", "end", "url", "notes") SELECT "id", "title", "location", "allday", "start", "end", "url", "notes" FROM `event`;--> statement-breakpoint
DROP TABLE `event`;--> statement-breakpoint
ALTER TABLE `__new_event` RENAME TO `event`;--> statement-breakpoint
PRAGMA foreign_keys=ON;