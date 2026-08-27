<script lang="ts">
	import { contacts } from "$lib/helpers";
</script>

<h2 class="uppercase">Contact</h2>
<p>Get in touch today for full-stack roles, freelance work, or questions about Koloseum. Email is most preferred.</p>
<div class="contact-icons">
	{#each contacts as { name, link, logo } (name)}
		{@const Logo = logo}
		<a href={link} target="_blank" rel="noreferrer" title={name}><Logo aria-label={name} /></a>
	{/each}
</div>
