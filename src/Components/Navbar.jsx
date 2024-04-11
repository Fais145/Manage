import logo from '../assets/logo.svg' 

const Navbar = () => {
  return (
    <div className="relative container mx-auto p-6">
        <div className="flex items-center justify-between space-x-6">
            <div className='pt-1.5'>
              <img src={logo} alt="logo"></img>
            </div>
            <div className='hidden md:flex space-x-2'>
              <a href='#' className=' hover:text-darkGrayishBlue'>Pricing</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
              <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
            </div>
            <div>
              <a href='#' className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'> Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar