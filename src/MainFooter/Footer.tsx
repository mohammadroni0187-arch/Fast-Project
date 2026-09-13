import FooterLogo from '../assets/logo-text.png';

const Footer = () => {
  return (
      <footer className='w-full bg-white border border-gray-200 py-12 px-6 mt-16'>
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-8  mb-12'>
        <div className='md:col-span-2 text-center md:text-left'>
          <img src={FooterLogo }alt="" />
        <p className='text-gray-500 text-sm max-w-sm
        mt-4'>Curated tools, technologies, and resources for developers building modern software.</p>
        <div className='flex items-center gap-4 text-sm font-medium text-gray-600 mt-5'>
          <a href="">Github</a>
          <a href="">Twitter</a>
          <a href="">Linkedin</a>
        </div>
        </div>
        <div className='hidden md:block'>
          <h4 className='text-xs font-bold text-gray-900 tracking-wider mb-4'>PRODUCT</h4>
          <ul className='space-y-2.5 text-sm text-gray-500'>
            
            <li><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
          </ul>
        </div>


        <div className='hidden md:block'>
          <h4 className='text-xs font-bold text-gray-900 tracking-wider mb-4'>COMPANY</h4>
          <ul className='space-y-2.5 text-sm text-gray-500'>
            
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>


        <div className='hidden md:block'>
          <h4 className='text-xs font-bold text-gray-900 tracking-wider mb-4'>LEGAL</h4>
          <ul className='space-y-2.5 text-sm text-gray-500'>
            
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
            
          </ul>
        </div>
        </div>
        </div>
        <div className='border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-500'>© 2026 Dev Stack. All rights reserved.</p>
          <div className='flex gap-5 text-sm text-gray-500'>
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        
    </div>
      </footer>
  );
};

export default Footer;