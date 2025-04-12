import type { Component } from "svelte";

import AWS from "$lib/svg/AWS.svelte";
import Bootstrap from "$lib/svg/Bootstrap.svelte";
import Deno from "$lib/svg/Deno.svelte";
import GCP from "$lib/svg/GoogleCloud.svelte";
import GSAP from "$lib/svg/GSAP.svelte";
import Jekyll from "$lib/svg/Jekyll.svelte";
import Postgres from "$lib/svg/PostgreSQL.svelte";
import Sass from "$lib/svg/Sass.svelte";
import Supabase from "$lib/svg/Supabase.svelte";
import Svelte from "$lib/svg/Svelte.svelte";
import TailwindCSS from "$lib/svg/TailwindCSS.svelte";

/* Types */
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
	site: string;
	skills: string[];
}

/* Helpers */
export const Helpers = {
	dev: {
		aws: { name: "Amazon Web Services", logo: AWS },
		bootstrap: { name: "Bootstrap", logo: Bootstrap },
		deno: { name: "Deno", logo: Deno },
		gcp: { name: "Google Cloud Platform", logo: GCP },
		gsap: { name: "GSAP", logo: GSAP },
		jekyll: { name: "Jekyll", logo: Jekyll },
		postgres: { name: "PostgreSQL", logo: Postgres },
		sass: { name: "Sass", logo: Sass },
		supabase: { name: "Supabase", logo: Supabase },
		sveltekit: { name: "SvelteKit", logo: Svelte },
		tailwindcss: { name: "Tailwind CSS", logo: TailwindCSS }
	} as Dev,
	projects: [
		{
			title: "Arkad World",
			desc: [
				"Arkad World Ltd is a Kenyan company specialising in conference interpreting, translation and conference management services. I was tasked with overhauling the company's website by removing Wordpress and building a simple, new design."
			],
			site: "https://arkadworld.com/",
			skills: ["jekyll", "sass", "gsap"]
		},
		{
			title: "Koloseum: Public Authentication",
			desc: [
				"Koloseum is an online esports platform currently in active development that connects players, gaming lounges, and esports fans. I am overseeing the development of all the platform's microservices starting with this one, which allows users to create a new account or log into their existing account.",
				"All of the platform's microservices are to be built using the listed frameworks and systems."
			],
			site: "https://auth.koloseum.ke/",
			skills: ["sveltekit", "supabase", "postgres", "tailwindcss", "deno"]
		}
	] as Project[]
};
