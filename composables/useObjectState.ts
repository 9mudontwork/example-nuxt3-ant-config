export const useObjectState = () => {
  const objectState = useState('objectState', () => ({ count: 0 }))

  return { objectState }
}
