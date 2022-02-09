<template>
  <div class="row">
    <slot>
    </slot>
  </div>
</template>

<style scoped>
.row {
   display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 10px;
}
</style>

<style>
.p5-description {
  flex-grow: 1;
  min-width: 230px;
  font-weight: bold;
  padding: 10px;
}

.text {
  font-weight: normal;
}
</style>
