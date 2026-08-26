<script lang="ts">
	import { contacts } from "$lib/helpers";
</script>

<h2 class="uppercase">Contact</h2>
<p>For full-stack roles, freelance work, or questions about Koloseum — email is the fastest route.</p>
<div class="contact-icons">
	{#each contacts as { name, link, logo } (name)}
		{@const Logo = logo}
		<a href={link} target="_blank" rel="noreferrer" title={name}><Logo aria-label={name} /></a>
	{/each}
</div>
