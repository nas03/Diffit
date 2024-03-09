import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(user)/contact')({
  component: () => <div>Hello /(user)/contact!</div>
})