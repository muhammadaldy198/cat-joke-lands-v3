import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One line, one joke: the entry is the JOKE constant below, written out byte for byte.
const JOKE = "Milo untied my shoelaces, I tripped and landed face-first in his food bowl, and he ate the kibble around my nose without pausing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
