<script lang="ts">
  import Quiz from "./components/Quiz.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";

  let startGame = false;
</script>

<Tailwindcss />
<main class="bg-zinc-800 min-h-screen w-screen text-white">
  {#if startGame}
    <Quiz />
  {:else}
    <div class="flex h-screen items-center justify-center">
      <button
        on:click={() => {
          startGame = true;
        }}
        class="px-10 py-5 rounded-lg text-4xl border border-1 hover:bg-white hover:text-black"
        >Start Quiz</button
      >
    </div>
  {/if}
</main>
