<script lang="ts">
	import "../app.css";

	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<div id="root">
	<Nav />
	<main>
		<h1 class="sr-only">Davy Kamanzi - Portfolio</h1>
		<div class="mobile-filler"></div>
		{@render children()}
	</main>
	<Footer />
</div>
