import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Button from '../components/Button/Button.component';

const Navbar = () => {
	const [isToggled, setIsToggled] = useState<boolean>(false);

	return (
		<>
			<nav className=' h-[5em] md:mx-auto md:flex justify-between items-center px-4 py-5 fixed w-full max-w-7xl bg-white'>
				<div className='flex '>
					<img src={logo} />
					<button
						className='ml-auto md:hidden px-2'
						onClick={() => setIsToggled((prevState) => !prevState)}
					>
						{isToggled ? <MdClose size={24} /> : <MdMenu size={24} />}
					</button>
				</div>
				<div
					className={`ml-auto ${
						isToggled ? 'block' : 'hidden'
					} absolute top-0 right-0 left-0  md:static max-sm:w-full md:p-0 max-sm:-z-10  md:block`}
				>
					<ul className='flex flex-col md:flex-row  bg-white max-sm:translate-y-[30%] max-sm:border-b-4 justify-center items-center gap-6 p-4 max-sm:w-screen rounded-md'>
						<li>
							<Link to={''}>Pricing</Link>
						</li>
						<li>
							<Link to={''}>Support</Link>
						</li>
						<li>
							<Link to={''}>
								<Button />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className='h-[5em]' />
		</>
	);
};

export default Navbar;
