import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(user)/home')({
  component: () => <div>Hello /(user)/home!</div>
})