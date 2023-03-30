import { getServerSession } from 'next-auth';
import { FC } from 'react';

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = async ({}) => {
  const session = await getServerSession();

  return (
    <div
      className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900
        z-50 top:0 left:0 right-0 h-20 border-b border-slate-300 darkL:border-slate-700 
    shadow-md flex items-center justify-between px-4 md:px-8
    '
    ></div>
  );
};

export default Navbar;
