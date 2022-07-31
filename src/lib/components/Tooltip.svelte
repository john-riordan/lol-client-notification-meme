<script>
	export let title;
	export let content;
	export let x;
	export let y;
</script>

<div style="--top: {y + 5}px; --left: {x + 5}px;">
	<h4>{title}</h4>
	<p>
		{content}
	</p>
</div>

<style>
	div {
		top: var(--top);
		left: var(--left);
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 1rem;
		position: absolute;
    pointer-events: none;
	}
	h4,
	p {
		margin: 0;
	}
</style>