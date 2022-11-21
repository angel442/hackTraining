<script>
  import { createEventDispatcher, prevent_default } from "svelte/internal";
  const dispatch = createEventDispatcher();

  export let type;
  export let hidden = false;
  export let flagged = false;

  export let fila;
  export let columna;

  export const show = (i, j) => {
    if (i == fila && j == columna) {
      console.log(i, j);
      reveal();
    }
  };

  function reveal() {
    if (flagged) return;
    if (type == 0) {
      dispatch("message", {
        fila: { fila },
        col: { columna },
      });
    }
    hidden = false;
  }

  function flag() {
    flagged = !flagged;
  }
</script>

<div
  class="cell"
  class:bomb={type < 0}
  class:hidden
  on:click={reveal}
  on:contextmenu={flag}
  on:keyup={reveal}
>
  {#if flagged}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="black"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
      />
    </svg>
  {/if}
  {#if type < 0}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-x-octagon-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
      />
    </svg>
  {:else if type != 0 && !hidden}
    <p>{type}</p>
  {/if}
</div>

<style>
  .cell {
    width: 2rem;
    height: 2rem;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bomb {
    color: black;
    background-color: red;
  }
  .hidden {
    color: transparent;
    background-color: rgb(140, 140, 140);
    cursor: pointer;
  }
</style>
