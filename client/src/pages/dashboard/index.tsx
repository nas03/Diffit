import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Home = () => {
	return (
		<>
			<div className="flex flex-col w-screen min-h-screen bg-white text-black">
				<Header />
				<h1 className="text-green-900 font-bold text-4xl text-center mt-8">
					Get "just right" resources for...
				</h1>
				<Tabs defaultValue="account" className="w-[400px]">
					<TabsList>
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						Make changes to your account here.
					</TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</Tabs>
			</div>
		</>
	);
};
export const Route = createFileRoute('/dashboard/')({
	component: Home,
});
export default Home;
