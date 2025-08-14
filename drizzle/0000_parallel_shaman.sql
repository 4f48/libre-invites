CREATE TABLE `event` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`location` text,
	`start` integer NOT NULL,
	`end` integer NOT NULL,
	`url` text,
	`notes` text
);
