import { useState } from 'react';

const Header = () => {
	const [currentPage, setCurrentPage] = useState('start');

	const handlePageChange = (page: string) => {
		setCurrentPage(page);
	};

	return (
		<>
			<nav className="">
				<ul className="flex flex-row w-full text-center items-center center h-20 border-b-slate-300 shadow-sm">
					<li className="px-10 py-3 h-full ">
						<img
							src="/img/logo.png"
							alt="Logo"
							className="w-[5.5rem] h-[3.2rem]"
						/>
					</li>
					<li
						className={`font-[600] text-sm  flex flex-row px-10 py-3 w h-full items-center  cursor-pointer ${
							currentPage === 'start'
								? 'border-b-2 border-b-green-500 hover:border-b-green-500'
								: 'hover:border-b-2 hover:border-b-slate-300 text-slate-500 hover:text-black'
						}`}
						onClick={() => handlePageChange('start')}>
						<p className="">Start New</p>
					</li>
					<li
						className={`font-[600] text-sm  flex flex-row px-10 py-3 w h-full items-center  cursor-pointer ${
							currentPage === 'resources'
								? 'border-b-2 border-b-green-500 hover:border-b-green-500'
								: 'hover:border-b-2 hover:border-b-slate-300 text-slate-500 hover:text-black'
						}`}
						onClick={() => handlePageChange('resources')}>
						<p className="">My Resources</p>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
