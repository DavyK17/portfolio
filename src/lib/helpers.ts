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
interface DevItem {
	name: string;
	logo: Component;
}

type Dev = { [key: string]: DevItem };

/* Data */
export const dev: Dev = {
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
};
