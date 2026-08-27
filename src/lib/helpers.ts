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
	typescript: { name: "TypeScript", logo: TypeScript },
	postgres: { name: "PostgreSQL", logo: Postgres },
	docker: { name: "Docker", logo: Docker },
	kubernetes: { name: "Kubernetes", logo: Kubernetes },
	digitalocean: { name: "DigitalOcean", logo: DigitalOcean },
	tailwindcss: { name: "Tailwind CSS", logo: TailwindCSS },
	daisyui: { name: "DaisyUI", logo: DaisyUI },
	deno: { name: "Deno", logo: Deno },
	cloudflareWorkers: { name: "Cloudflare Workers", logo: CloudflareWorkers },
	jekyll: { name: "Jekyll", logo: Jekyll },
	sass: { name: "Sass", logo: Sass },
	bootstrap: { name: "Bootstrap", logo: Bootstrap },
	gsap: { name: "GSAP", logo: GSAP }
};

export const projects: Project[] = [
	{
		title: "Arkad World",
		desc: [
			"Arkad World Ltd is a Kenyan conference interpreting, translation, and conference management company. I migrated their site from WordPress to Jekyll and have also continued to maintain it since."
		],
		site: "https://arkadworld.com/",
		skills: [dev.jekyll, dev.sass, dev.gsap]
	},
	{
		title: "Man of Substance",
		desc: [
			"<em>Man of Substance</em> is my debut music album under my pseudonym DVK. Its website is a SvelteKit/Supabase app that allows users to view the album credits and browse the tracklist (synopses, lyrics, credits), while crowdfunding contributors can also claim rewards. Reward tiers are computed in SQL and signed URLs are used for file delivery."
		],
		site: "https://manofsubstance.pages.dev/",
		repo: "https://github.com/DavyK17/man-of-substance",
		skills: [dev.sveltekit, dev.supabase, dev.postgres, dev.typescript, dev.sass, dev.cloudflareWorkers]
	},
	{
		title: "Koloseum",
		desc: [
			"Koloseum is Kenya's competition platform for esports. It consists of independently deployable SvelteKit microservices for Players, Lounges, and Backroom, all on a shared PostgreSQL database. I am currently designing and building the MVP in accordance with our internal specifications.",
			"Public Authentication was available to the public from March to December 2025. 51 of 80 external (non-Koloseum staff) sign-ups completed the age-gated Player registration with ID verification."
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
