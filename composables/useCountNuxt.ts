export const useCountNuxt = () => {
  const count = useState('count', () => 0)

  return { count }
}
