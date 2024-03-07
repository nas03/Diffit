import SearchBar from '../../components/SearchBar';
import Layout from '../layout';
const Home = () => {
	return (
		<>
			<Layout>
				<div className="flex flex-col">
					<SearchBar />
                    <h1>Hello, Anh Son</h1>
                    
				</div>
			</Layout>
		</>
	);
};
export default Home;
