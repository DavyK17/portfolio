import type { Component } from "svelte";

import Bootstrap from "$lib/svg/Bootstrap.svelte";
import CloudflareWorkers from "./svg/CloudflareWorkers.svelte";
import DaisyUI from "./svg/DaisyUI.svelte";
import Deno from "$lib/svg/Deno.svelte";
import DigitalOcean from "$lib/svg/DigitalOcean.svelte";
import Docker from "$lib/svg/Docker.svelte";
import Email from "$lib/svg/Email.svelte";
import GitHub from "$lib/svg/GitHub.svelte";
import GSAP from "$lib/svg/GSAP.svelte";
import Jekyll from "$lib/svg/Jekyll.svelte";
import Kubernetes from "$lib/svg/Kubernetes.svelte";
import LinkedIn from "$lib/svg/LinkedIn.svelte";
import Postgres from "$lib/svg/PostgreSQL.svelte";
import Sass from "$lib/svg/Sass.svelte";
import Supabase from "$lib/svg/Supabase.svelte";
import Svelte from "$lib/svg/Svelte.svelte";
import TailwindCSS from "$lib/svg/TailwindCSS.svelte";
import TypeScript from "$lib/svg/TypeScript.svelte";
import Upwork from "$lib/svg/Upwork.svelte";

/* Types */
interface Contact {
	name: string;
	link: string;
	logo: Component;
}

interface Dev {
	[key: string]: DevItem;
}

interface DevItem {
	name: string;
	logo: Component;
}

interface Project {
	title: string;
	desc: string[];
	site?: string;
	repo?: string;
	skills: DevItem[];
}

/* Helpers */
export const contacts = [
	{ name: "Email", link: "mailto:davykamanzi@live.com", logo: Email },
	{ name: "GitHub", link: "https://github.com/DavyK17", logo: GitHub },
	{ name: "LinkedIn", link: "https://linkedin.com/in/davykamanzi", logo: LinkedIn },
	{ name: "Upwork", link: "https://www.upwork.com/freelancers/~01f8763fa758afea25", logo: Upwork }
] as Contact[];

export const dev: Dev = {
	sveltekit: { name: "SvelteKit", logo: Svelte },
	supabase: { name: "Supabase", logo: Supabase },
	postgres: { name: "PostgreSQL", logo: Postgres },
	typescript: { name: "TypeScript", logo: TypeScript },
	docker: { name: "Docker", logo: Docker },
	kubernetes: { name: "Kubernetes", logo: Kubernetes },
	digitalocean: { name: "DigitalOcean", logo: DigitalOcean },
	tailwindcss: { name: "Tailwind CSS", logo: TailwindCSS },
	daisyui: { name: "DaisyUI", logo: DaisyUI },
	cloudflareWorkers: { name: "Cloudflare Workers", logo: CloudflareWorkers },
	deno: { name: "Deno", logo: Deno },
	jekyll: { name: "Jekyll", logo: Jekyll },
	sass: { name: "Sass", logo: Sass },
	gsap: { name: "GSAP", logo: GSAP },
	bootstrap: { name: "Bootstrap", logo: Bootstrap }
};

export const projects: Project[] = [
	{
		title: "Arkad World",
		desc: [
			"Arkad World Ltd is a Kenyan conference interpreting, translation and conference management company. I migrated the marketing site from WordPress to Jekyll in 2022 and have maintained it since — 118 commits and 26 pull requests, with Cloudflare Pages deploying staging and production from git. The live footer credits the work by name."
		],
		site: "https://arkadworld.com/",
		skills: [dev.jekyll, dev.sass, dev.gsap]
	},
	{
		title: "Man of Substance",
		desc: [
			"SvelteKit and Supabase application for a crowdfunded album: public catalogue (synopses, lyrics, credits) and contributor rewards under PostgreSQL row-level security, tier entitlements computed in SQL, and one-hour signed URLs for private file delivery. Public repository — the readable sample of the stack used on Koloseum."
		],
		site: "https://manofsubstance.pages.dev/",
		repo: "https://github.com/DavyK17/man-of-substance",
		skills: [dev.sveltekit, dev.supabase, dev.postgres, dev.typescript, dev.sass, dev.cloudflareWorkers]
	},
	{
		title: "Koloseum",
		desc: [
			"Kenya's competition platform for esports: independently deployable SvelteKit services for Players, Lounges and Backroom on a shared PostgreSQL database with row-level security and 390 PL/pgSQL functions. I designed and built the completed MVP services (authentication, sessions, lounge account/operations/staff).",
			"Public Authentication ran in production from March to October 2025: 51 of 80 external sign-ups completed an age-gated Player registration with Smile ID. Application source is private; architecture, ADRs and screenshots are in the engineering showcase."
		],
		repo: "https://github.com/koloseum-technologies/engineering-showcase",
		skills: [
			dev.sveltekit,
			dev.supabase,
			dev.postgres,
			dev.typescript,
			dev.tailwindcss,
			dev.daisyui,
			dev.deno,
			dev.docker,
			dev.kubernetes,
			dev.digitalocean
		]
	}
];
