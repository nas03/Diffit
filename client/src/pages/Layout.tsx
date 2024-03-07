import NavigationBar from '../components/NavigationBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="flex flex-row">
				<NavigationBar />
				{children}
			</div>
		</>
	);
};
export default Layout;
