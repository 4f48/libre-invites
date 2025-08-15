CREATE TABLE `event` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`location` text,
	`allday` integer NOT NULL,
	`start` integer NOT NULL,
	`end` integer NOT NULL,
	`url` text,
	`notes` text
);
