<script lang="ts">
  import type { Question } from "../lib/questions";

  export let question: Question;
  export let ansQuestion: (correctAns: boolean) => void;

  const checkAns = (option: string, target: EventTarget) => {
    const btn = target as HTMLButtonElement;

    btn.disabled = true;

    btn.classList.remove("bg-slate-200");

    if (option === question.ans) {
      btn.classList.add("bg-green-500");
      ansQuestion(true);
    } else {
      btn.classList.add("bg-red-500");
      ansQuestion(false);
    }
  };
</script>

<div class="px-5 md:px-20 py-10 md:py-20 text-5xl text-center">
  {question.q}
</div>

<div class="flex px-0 md:px-40 flex-wrap gap-y-10">
  {#each ["a", "b", "c", "d"] as option (question.q + option)}
    <div class="flex flex-[50%] justify-center">
      <button
        on:click={(e) => {
          checkAns(option, e.target);
        }}
        class="bg-slate-200 text-black px-10 py-5 rounded-lg text-xl"
        >{question[option]}</button
      >
    </div>
  {/each}
</div>
