import HeroImage from '../Hero/HeroImage.component';
import HeroText from '../Hero/HeroText.component';
const Hero = () => {
	return (
		<div>
			<section className='min-h-[100vh] md:min-h-[85vh]  lg:p-2'>
				<div className='h-80 flex items-center flex-wrap '>
					<div className=' order-last lg:order-first w-full lg:w-1/2'>
						<HeroText />
					</div>
					<div className='order-first lg:order-first w-full lg:w-1/2'>
						<HeroImage />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
