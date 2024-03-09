import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(user)/faq')({
  component: () => <div>Hello /(user)/faq!</div>
})