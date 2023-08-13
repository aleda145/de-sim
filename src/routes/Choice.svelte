<script>
	import { burnout } from './stores';
	/**
	 * @param {number} burn
	 * @param {number} change
	 */
	function burnoutMath(burn, change) {
		return burn + change;
	}
</script>

<div class="choice">
	<div>
		<button on:click={() => ($burnout = burnoutMath($burnout, -10))}>Decrease by 10</button>
	</div>
	<div><button on:click={() => ($burnout = burnoutMath($burnout, 10))}>Increase by 10</button></div>
</div>
