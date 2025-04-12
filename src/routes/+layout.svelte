<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";

	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>Davy Kamanzi - Web Developer</title>
	<meta
		name="description"
		content="Full-stack web developer delivering robust, error-resistant applications. Proficient in HTML, CSS, JavaScript, and SQL, with a particular focus on SvelteKit, Supabase, and PostgreSQL."
	/>
</svelte:head>

<div class="container">
	<Nav />
	<main class="max-w-3xl px-4 py-2">
		{#if page.url.pathname !== "/"}
			<h1 class="sr-only">Davy Kamanzi - Web Developer</h1>
		{/if}
		<div class="h-[75px] md:hidden"></div>
		{@render children()}
	</main>
	<Footer />
</div>
