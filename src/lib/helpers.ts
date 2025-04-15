import type { Component } from "svelte";

import Bootstrap from "$lib/svg/Bootstrap.svelte";
import Deno from "$lib/svg/Deno.svelte";
import Docker from "$lib/svg/Docker.svelte";
import Email from "$lib/svg/Email.svelte";
import GCP from "$lib/svg/GoogleCloud.svelte";
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
	bootstrap: { name: "Bootstrap", logo: Bootstrap },
	deno: { name: "Deno", logo: Deno },
	docker: { name: "Docker", logo: Docker },
	gcp: { name: "Google Cloud Platform", logo: GCP },
	gsap: { name: "GSAP", logo: GSAP },
	jekyll: { name: "Jekyll", logo: Jekyll },
	kubernetes: { name: "Kubernetes", logo: Kubernetes },
	postgres: { name: "PostgreSQL", logo: Postgres },
	sass: { name: "Sass", logo: Sass },
	supabase: { name: "Supabase", logo: Supabase },
	sveltekit: { name: "SvelteKit", logo: Svelte },
	tailwindcss: { name: "Tailwind CSS", logo: TailwindCSS },
	typescript: { name: "TypeScript", logo: TypeScript }
};

export const projects: Project[] = [
	{
		title: "Arkad World",
		desc: [
			"Arkad World Ltd is a Kenyan company specialising in conference interpreting, translation and conference management services. I was tasked with overhauling the company's website by removing Wordpress and building a simple, new design."
		],
		site: "https://arkadworld.com/",
		skills: [dev.jekyll, dev.sass, dev.gsap]
	},
	{
		title: "Man of Substance",
		desc: [
			"<em>Man of Substance</em> is my debut studio album as a musician, under my pseudonym DVK. Its website allows users to view information about the album, including synopses, lyrics, and credits for each track. Crowdfunding contributors are also able to claim their rewards on the app."
		],
		site: "https://manofsubstance.pages.dev/",
		repo: "https://github.com/DavyK17/man-of-substance",
		skills: [dev.sveltekit, dev.supabase, dev.postgres, dev.typescript, dev.sass]
	},
	{
		title: "Koloseum: Public Authentication",
		desc: [
			"Koloseum is a Kenyan esports platform currently in active development that connects players, gaming lounges, and esports fans. Its public authentication microservice allows users to log in or create a new account.",
			"I am also overseeing the development of the rest of the platform using the same listed frameworks and systems."
		],
		site: "https://auth.koloseum.ke/",
		skills: [
			dev.sveltekit,
			dev.supabase,
			dev.postgres,
			dev.typescript,
			dev.tailwindcss,
			dev.deno,
			dev.docker,
			dev.kubernetes,
			dev.gcp
		]
	}
];
