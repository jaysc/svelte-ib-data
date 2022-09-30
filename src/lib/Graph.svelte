<script lang="ts">
	import {
		CategoryScale,
		Chart,
		Legend,
		LinearScale,
		LineController,
		LineElement,
		PointElement,
		Title,
		Tooltip,
		type ChartTypeRegistry,
		BarController,
		BarElement
	} from 'chart.js';
	import Slider from '@bulatdashiev/svelte-slider';

	import _ from 'lodash';
	import { onMount } from 'svelte';

	export let data: any;
	export let type: keyof ChartTypeRegistry = 'line';

	let init = false;
	let chartData: any;
	let canvas: HTMLCanvasElement;
	let chart: Chart;
	let ctx: CanvasRenderingContext2D | null;
	let zoomPlugin: any;

	function updateDataRange() {
		if (!data) {
			return null;
		}

		if (!chartData) {
			chartData = _.cloneDeep(data);
		}

		const start = rangeValue[0];
		const end = rangeValue[1];

		chartData.labels = data.labels.slice(start, end + 1);
		chartData.datasets[0].data = data.datasets[0].data.slice(start, end + 1);
	}

	function setChart() {
		if (!init || !canvas) {
			return;
		}

		if (canvas) {
			if (!ctx) {
				ctx = canvas.getContext('2d');
			}
			if (chart) {
				chart.destroy();
			}

			if (!chartData) {
				return;
			}

			if (ctx) {
				chart = new Chart(ctx, {
					type,
					data: chartData,
					options: {
						animation: false,
						responsive: true,
						plugins: {
							legend: {
								position: 'top'
							},
							title: {
								display: true,
								text: 'Posts'
							},
							zoom: {
								pan: {
									enabled: true
								},
								zoom: {
									wheel: {
										enabled: true
									},
									pinch: {
										enabled: true
									},
									mode: 'xy'
								}
							}
						}
					}
				});
			}
		}
	}

	$: {
		init;
		rangeValue;
		updateDataRange();
		setChart();
	}

	onMount(async () => {
		//Must load after init
		zoomPlugin = (await import('chartjs-plugin-zoom')).default;
		Chart.register(
			CategoryScale,
			Legend,
			LinearScale,
			LineController,
			LineElement,
			PointElement,
			Title,
			Tooltip,
			zoomPlugin,
			BarController,
			BarElement
		);
		updateDataRange();
		setChart();

		init = true;
	});

	const maxRange = data.labels.length;
	let rangeValue = [1, maxRange];
</script>

<canvas bind:this={canvas} />

<div class="m-4">
	<p>Start: {data?.labels[rangeValue[0]]}</p>
	<p>Right: {data?.labels[rangeValue[1] - 1]}</p>
	<Slider max={maxRange} min={1} bind:value={rangeValue} range order />
</div>
