import PhoneMockup from './compoents/PhomeMockup.component';
import SocialIcon from './compoents/SocialIcon.component';

const About = () => {
	return (
		<div className='min-h-[100vh] mt-4'>
			<section className='flex flex-wrap gap-4 justify-between'>
				<div className='text-gray-500 w-[32em]'>
					<h2 className='text-[3rem] font-bold text-slate-900'>
						Curate Your Feed from dozens of resources.
					</h2>
					<p className='mt-4'>
						We cover all makor platforms where one could want to curate their
						feed from. Reddit, ProductHunt, IndieHackers, and so much more.
						<span className='text-accent block font-semibold mt-4 cursor-pointer'>
							See full list of resources
						</span>
					</p>
				</div>
				<div className='h-[16em]'>
					<SocialIcon />
				</div>
			</section>
			<section className='flex flex-wrap justify-between items-center mt-10 w-full'>
				<div className=' '>
					<PhoneMockup />
				</div>
				<div className='  text-gray-500 w-[36em] px-4'>
					<h2 className='text-[2.5rem] font-bold text-slate-900 '>
						Access your feed from the comfort of your phone.
					</h2>
					<p className='mt-2'>
						With native apps for both IOS andAndroid, accessing your curated
						content has never been easier.
						<span className='text-accent block font-bold mt-4 cursor-pointer'>
							Sign up for the waitlist
						</span>
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
