<script lang="ts">
	import { projects } from "$lib/helpers";

	const linkLabels = ["Visit website", "View repository"];
</script>

<h2 class="uppercase">Projects</h2>
{#each projects as { title, desc, repo, site, skills }}
	<div class="project">
		<div class="desc">
			<h3>{title}</h3>
			<div>
				{#each desc as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
			{#if site && repo}
				<div class="project-links">
					<a href={site} target="_blank" rel="noreferrer">{linkLabels[0]}</a>
					<span class="bullet"></span>
					<a href={repo} target="_blank" rel="noreferrer">{linkLabels[1]}</a>
				</div>
			{:else}
				<a href={site || repo} target="_blank" rel="noreferrer">{site ? linkLabels[0] : linkLabels[1]}</a>
			{/if}
		</div>
		<div class="skills">
			{#each skills as { name, logo }}
				<svelte:component this={logo} aria-label={name} />
			{/each}
		</div>
	</div>
{/each}
