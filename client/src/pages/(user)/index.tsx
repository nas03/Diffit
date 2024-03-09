import Header from '@/components/Header';
import { createFileRoute } from '@tanstack/react-router';
interface IStepProps {
	title: string;
	content: string;
	image: string;
}
const Step: React.FC<IStepProps> = ({ title, content, image }) => {
	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
			<p>{image}</p>
		</>
	);
};
const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col">
			<Header />

			<header className="pt-20 w-full" id="heading">
				<h1 className="text-[3rem] leading-9 font-bold text-center">
					Learning resources for all
				</h1>
				<p>
					Teachers use Diffit to get "just right" instructional materials,
					saving tones of <br />
					time and helping all students to access grade level content
				</p>
				<button className="px-4 py-2 bg-green-500">Teachers Start Here</button>
			</header>
			<section className="" id="how-it-works">
				<h2>How it works</h2>
				<Step
					title="Step 1: Whatever you're teaching, we've got you covered"
					content="Use existing curriculum, or generate content from scratch with real, cited sources. Choose a grade level and language, and watch Diffit create a complete, differentiated resources"
					image="null"
				/>
				<Step
					title="Step 2: Customize - because teachers know best"
					content="Instantly re-level text, customize vocabulary, add questions at different DOK levels, translate, and lots more"
					image="null"
				/>
				<Step
					title="Step 3: Get student-ready activities"
					content="Turn your content into 'just right' activities with our library of high-quality, student-ready exports"
					image="null"
				/>
			</section>
		</div>
	);
};
export const Route = createFileRoute('/(user)/')({
	component: HomePage,
});
export default HomePage;
