CREATE TABLE `links_table` (
	`id` text PRIMARY KEY NOT NULL,
	`sourceUrl` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`deletedAt` text
);
