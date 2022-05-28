const state = reactive({
  number: 0,
})

export const useCount = () => {
  return { ...toRefs(state) }
}
