<script lang="ts">
	import Bio from "$lib/img/bio.webp";

	import { asset } from "$app/paths";
	import { dev } from "$lib/helpers";

	const frameworks = Object.values(dev)
		.map(({ name }) => name)
		.join(", ");
</script>

<h1 class="uppercase">Davy Kamanzi</h1>
<div class="flex max-md:flex-col max-md:items-center md:flex-row">
	<img class="h-60 border-2 border-solid border-black" src={Bio} alt="Davy Kamanzi" />
	<div class="md:px-4">
		<h2>Full-stack engineer</h2>
		<p>
			Building and shipping web software since 2020. Currently designing and building <a
				href="https://github.com/koloseum-technologies"
				target="_blank"
				rel="noopener noreferrer">Koloseum</a
			>, Kenya's competition platform for esports, using TypeScript, SvelteKit, PostgreSQL, and Supabase. Open to remote or
			hybrid mid/senior roles.
		</p>
	</div>
</div>
<ul class="mb-4 list-none p-0 md:mt-4">
	<li><strong>Languages:</strong> TypeScript, JavaScript, SQL, PL/pgSQL, HTML, CSS</li>
	<li><strong>Frameworks/systems:</strong> {frameworks}</li>
</ul>
<a class="cv-button" href={asset("/Davy-Kamanzi-CV.pdf")}>View CV</a>
