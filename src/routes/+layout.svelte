<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";

	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();

	const title = $derived(
		`${page.url.pathname === "/projects" ? "Projects" : page.url.pathname === "/contact" ? "Contact" : "Home"} | Davy Kamanzi - Full-stack engineer`
	);
	const description =
		"Full-stack engineer based in Nairobi. Currently building Koloseum with SvelteKit, PostgreSQL, and Supabase. Open to remote or hybrid mid/senior roles.";
	const url = $derived(`https://davyk17.pages.dev${page.url.pathname === "/" ? "" : page.url.pathname}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="container">
	<Nav />
	<main class="px-4 py-2 md:max-w-3xl">
		{#if page.url.pathname !== "/"}
			<h1 class="sr-only">{title}</h1>
		{/if}
		<div class="h-[75px] md:hidden"></div>
		{@render children()}
	</main>
	<Footer />
</div>
