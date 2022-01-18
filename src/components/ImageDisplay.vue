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
  margin-top: 20px;
}
</style>

<style>
.p5-description {
  flex-grow: 1;
  min-width: 430px;
  padding: 30px;
  font-weight: bold;
}

.text {
  font-weight: normal;
}
</style>
