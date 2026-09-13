import BannerLogo from '../assets/banner-stack.png';
const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-16'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10'>
      <div className='flex-1'>

      <h2 className='text-7xl font-bold'>Build Your Ideal
<span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent" >Development Stack</span></h2>
<p className='text-gray-600 mt-6 max-w-xl leading-7'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
<div className='mt-6 flex gap-4'>
    <button className="btn border-none text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">Explore Technologies</button>
          <button className="btn text-black">Learn More</button>
      </div>
</div>
<div className='flex justify-between items-end'>
  <img src={BannerLogo} alt="" className='w-auto'/>
</div>
  </div>
    </div>
  );
};

export default HeroSection;