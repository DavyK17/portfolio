<script lang="ts">
	import { projects } from "$lib/helpers";
</script>

<h2 class="uppercase">Projects</h2>
{#each projects as { title, desc, repo, site, skills } (title)}
	<div class="project">
		<div class="desc">
			<h3>{title}</h3>
			<div>
				{#each desc as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
			{#if site && repo}
				<div>
					<a href={site} target="_blank" rel="noreferrer">Visit website</a>
					<span class="bullet"></span>
					<a href={repo} target="_blank" rel="noreferrer">View repository</a>
				</div>
			{:else}
				<a href={site || repo} target="_blank" rel="noreferrer">{site ? "Visit website" : "View repository"}</a>
			{/if}
		</div>
		<div class="skills">
			{#each skills as { name, logo } (name)}
				{@const Logo = logo}
				<Logo aria-label={name} />
			{/each}
		</div>
	</div>
{/each}
