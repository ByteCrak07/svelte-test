<script lang="ts">
  import { afterUpdate } from "svelte";

  export let time: number;
  export let totalTime: number;

  let width = 100;
  let barColor = "bg-green-600";

  afterUpdate(() => {
    width = (time * 100) / totalTime;

    if (time < 3000 && time > 1000)
      barColor = "bg-yellow-400"; // if 3secs is remaining
    else if (time < 1000) barColor = "bg-red-600"; // if 1sec is remaining
    else barColor = "bg-green-600";
  });
</script>

<div class="px-5 md:px-20">
  <div class="bg-gray-500">
    <div class={`py-4 h-full ${barColor}`} style={`width: ${width}% ;`} />
  </div>
</div>
