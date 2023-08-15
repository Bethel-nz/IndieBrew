import { useLocation } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './layouts/Navbar.layout';
import Home from './pages/Homepage/Home.page';

const Root = () => {
	const location = useLocation();
	return (
		<>
			<Wrapper className={'px-0 mb-6'}>
				<Navbar />
			</Wrapper>
			<Wrapper>
				<main>{location.pathname === '/' && <Home />}</main>
			</Wrapper>
		</>
	);
};

export default Root;
