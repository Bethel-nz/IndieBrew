import Avatars from '../../../../components/Avatars/Avatars.component';
import Button from '../../../../components/Button/Button.component';

const HeroText = () => {
	return (
		<>
			<div className='h-[32em] flex flex-col justify-center text-gray-500'>
				<h1 className='text-[3em] font-bold text-slate-900'>
					<span className='inline lg:block'>Your Weekly </span>
					personal feed digest.
				</h1>
				<h3 className='text-lg'>
					With IndieBrew, get personal feeds from resources all around the web,
					including Reddit, HackerNews,IndieHacker, and much more.
				</h3>
				<div className='my-6'>
					<Button />
				</div>
				<div className='my-4'>
					<Avatars />
				</div>
				<div className='mt-2'>
					Join <span className='text-accent font-semibold'>32,642</span>{' '}
					IndieBrewers in curating their personal digest.
				</div>
			</div>
		</>
	);
};

export default HeroText;
