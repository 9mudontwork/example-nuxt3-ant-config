<template>
  <div class="my-4 mx-auto flex flex-col gap-2 max-w-[500]">
    <CDatePicker />
    <CButton> test antd </CButton>

    <span class="test-sass">test sass</span>

    <span>{{ count.number }}</span>
    <IncreaseButton />
    <button @click="increaseCount()">click from native</button>

    <span>{{ countNuxt }}</span>
    <TestShare />
    <button @click="countNuxt++">click change nuxt use state</button>

    <span>{{ objectState.count }}</span>
    <button @click="objectState.count++">click change nuxt use state (object)</button>
    <button @click="changeObjectCount()">click change nuxt use state (local func)</button>
  </div>
</template>

<script lang="tsx" setup>
  const count = useCount()
  const { count: countNuxt } = useCountNuxt()
  const { objectState } = useObjectState()

  const increaseCount = () => (count.number.value += 1)

  const IncreaseButton = () => {
    return <button onClick={() => (count.number.value += 1)}>clock from jsx</button>
  }

  const changeObjectCount = () => (objectState.value.count += 1)
</script>

<style lang="scss">
  .test-sass {
    color: blue;
  }
</style>
