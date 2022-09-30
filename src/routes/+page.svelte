<script lang="ts">
	import Graph from "$lib/Graph.svelte";
	import {data as postData, label, label as postLabel} from "../data/posts"

	const data = {
		labels: postLabel,
		datasets: [
			{
				label: 'Posts',
				data: postData,
				borderColor: 'rgb(102, 204, 204)',
				pointBorderWidth: 2,
				pointHitRadius: 5,
				tension: 0.25
			}
		]
	};
</script>

<main>
	<Graph data={data} />
</main>
