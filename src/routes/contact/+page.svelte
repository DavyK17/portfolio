<script lang="ts">
	import { contacts } from "$lib/helpers";
</script>

<h2 class="uppercase">Contact</h2>
<p>Get in touch today to get started on your project.</p>
<div class="contact-icons">
	{#each contacts as { name, link, logo } (name)}
		<a href={link} target="_blank" rel="noreferrer" title={name}><svelte:component this={logo} aria-label={name} /></a>
	{/each}
</div>
