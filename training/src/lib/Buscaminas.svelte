<script>
  import Cell from "./Cell.svelte";

  export let size = 8;

  let showChild;

  function handleMessage(event) {
    let i = event.detail.fila.fila;
    let j = event.detail.col.columna;

    if (i > 0) {
      showChild(i - 1, j - 1);
      showChild(i - 1, j);
      showChild(i - 1, j + 1);
    }
    showChild(i, j - 1);
    showChild(i, j);
    showChild(i, j + 1);
    if (i < size - 1) {
      showChild(i + 1, j - 1);
      showChild(i + 1, j);
      showChild(i + 1, j + 1);
    }
  }

  let cells = Array(size)
    .fill()
    .map(() => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (Math.random() < 0.2) {
        cells[i][j] = -9;
        if (i > 0) {
          if (j > 0) cells[i - 1][j - 1]++;
          cells[i - 1][j]++;
          if (j < size - 1) cells[i - 1][j + 1]++;
        }
        if (j > 0) cells[i][j - 1]++;
        cells[i][j]++;
        if (j < size - 1) cells[i][j + 1]++;
        if (i < size - 1) {
          if (j > 0) cells[i + 1][j - 1]++;
          cells[i + 1][j]++;
          if (j < size - 1) cells[i + 1][j + 1]++;
        }
      }
    }
  }
</script>

<table class="board">
  {#each cells as row, i}
    <tr class="row">
      {#each row as cell, j}
        <td>
          <Cell
            type={cell}
            hidden
            fila={i}
            columna={j}
            on:message={handleMessage}
            bind:show={showChild}
          />
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    background-color: rgb(100, 100, 100);
    margin: 2rem;
    padding: 1rem;
  }

  td {
    padding: auto;
  }
</style>
