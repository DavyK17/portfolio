<script lang="ts">
	import Bio from "$lib/img/bio.webp";
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
			I design and build Koloseum, Kenya's competition platform for esports — TypeScript, SvelteKit, PostgreSQL and
			Supabase, with business rules enforced in the database. Open to remote mid/senior full-stack roles.
		</p>
	</div>
</div>
<ul class="mb-4 list-none p-0 md:mt-4">
	<li><strong>Languages:</strong> TypeScript, JavaScript, SQL, PL/pgSQL, HTML, CSS</li>
	<li><strong>Frameworks/systems:</strong> {frameworks}</li>
	<li>
		<strong>Elsewhere:</strong>
		<a href="/Davy-Kamanzi-CV.md">CV</a> ·
		<a href="https://github.com/koloseum-technologies/engineering-showcase">Engineering showcase</a> ·
		<a href="https://github.com/koloseum-technologies">Koloseum</a>
	</li>
</ul>
