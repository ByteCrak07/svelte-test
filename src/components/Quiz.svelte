<script lang="ts">
  import { afterUpdate } from "svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import Question from "./Question.svelte";
  import { questions } from "../lib/questions";
  import { countdownTimer, stopTimer } from "../lib/timer";

  // states
  let totalTime = 6000; // total time in milliseconds
  let time = totalTime; // timer for the quiz
  let questionNo = -1;
  let score = 0;
  const totalQuestions = questions.length;

  const updateTime = (newTime: number) => {
    time = newTime;
  };

  const ansQuestion = (correctAns: boolean) => {
    stopTimer();

    if (time != 0) {
      if (correctAns) score++;
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    stopTimer();

    if (questionNo + 1 === totalQuestions) {
      questionNo++;
    } else
      setTimeout(() => {
        time = totalTime;
        questionNo++;
        countdownTimer(updateTime, totalTime);
      }, 1000);
  };

  nextQuestion();

  afterUpdate(() => {
    if (time === 0) {
      nextQuestion();
    }
  });
</script>

{#if questionNo < totalQuestions}
  <div class="py-20">
    <ProgressBar {time} {totalTime} />

    <div class="px-5 md:px-20 py-20 text-2xl md:text-4xl flex justify-between">
      <div>Question {questionNo >= 0 ? questionNo + 1 : ""}</div>
      <div>Score: {score}</div>
    </div>

    {#if questionNo >= 0}
      <Question question={questions[questionNo]} {ansQuestion} />
    {/if}
  </div>
{:else}
  <div class="flex h-screen items-center justify-center text-5xl">
    Final score: {score}
  </div>
{/if}
