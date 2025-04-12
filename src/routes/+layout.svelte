<script lang="ts">
	import "../app.css";

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

<div id="root">
	<Nav />
	<main>
		<h1 class="sr-only">Davy Kamanzi - Web Developer</h1>
		<div class="mobile-filler"></div>
		{@render children()}
	</main>
	<Footer />
</div>
