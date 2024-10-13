import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@/assets/Avatar.png';
import SearchIcon from '@/assets/icons/search.png';
import HomeIcon from '@/assets/icons/home.png';
import TVShowsIcon from '@/assets/icons/tv-shows.png';
import MoviesIcon from '@/assets/icons/movies.png';
import GenresIcon from '@/assets/icons/genres.png';
import WatchLaterIcon from '@/assets/icons/watch-later.png';


const data = [
  { icon: HomeIcon, title: 'Home', path: '/', w: '26px', h: '29px' },
  { icon: TVShowsIcon, title: 'TV Shows', path: 'tv-show', w: '26px', h: '27px' },
  { icon: MoviesIcon, title: 'Movies', path: 'movies', w: '30px', h: '30px' },
  { icon: GenresIcon, title: 'Genres', path: 'genres', w: '27px', h: '28px' },
  { icon: WatchLaterIcon, title: 'Watch Later', path: 'watch-later', w: '30px', h: '30px' },
];


export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        !!isOpen && (
          <div className='bg-custom-gradient absolute top-0 left-0 w-[calc(100vw-16px)] h-full -z-10'></div>
        )
      }
      <nav
        className='group w-[157px] hover:w-[370px] h-full bg-black pt-20 pb-[60px] relative transition-all duration-300 bg-transparent hover:bg-black/80 overflow-hidden'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className='pl-[34px] group-hover:pl-[38px] pr-[41px] h-full flex flex-col justify-between'>
          <div className='h-[calc(100%-126px)]'>
            <div className='hidden group-hover:flex items-center gap-5'>
              <img
                src={Avatar}
                alt={Avatar}
                className='w-[82px] h-[82px] min-w-[82px]'
              />
              <p className='text-[32px] leading-[30px] -tracking-[0.32px]'>Daniel</p>
            </div>
            <div className='group-hover:mt-[25px] mt-[102px]'>
              <div className='flex items-center justify-center group-hover:justify-start group-hover:px-6 group-hover:my-[4px] my-0 h-[82px] w-[82px] group-hover:h-[72px] group-hover:w-[312px] '>
                <div className='flex justify-center group-hover:justify-start gap-[52px] rounded-[41px] group-hover:rounded-xl '>
                  <img
                    src={SearchIcon}
                    alt={SearchIcon}
                    className='w-[30px] h-[26px] min-w-[30px]'
                  />
                  <p className='hidden group-hover:block  text-4xl tracking-tighter'> Search </p>
                </div>
              </div>
              {
                data.map((item) => {
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center justify-center group-hover:my-[6px] my-0 hover:bg-[#3B486D] group-hover:justify-start group-hover:px-6 gap-[52px] h-[82px] w-[82px] group-hover:h-[72px] group-hover:w-[312px] rounded-[41px] group-hover:rounded-xl ${
                          isActive ? 'bg-[#3B486D]' : ''
                        }`
                      }
                    >
                      <div className='group-hover:h-[24px] flex justify-center group-hover:justify-start gap-[52px] rounded-[41px] group-hover:rounded-xl '>
                        <div>
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className='w-full'
                          />
                        </div>
                        <p className='hidden group-hover:block text-4xl tracking-tighter'>
                          {item.title}
                        </p>
                      </div>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
          <div className='hidden group-hover:block px-6 min-w-[240px]'>
            <button className='block text-[#858688] text-2xl leading-[42px] tracking-[4.8px]'>
              LANGUAGE
            </button>
            <button className='block text-[#858688] text-2xl leading-[42px] tracking-[4.8px]'>
              GET HELP
            </button>
            <button className='block text-[#858688] text-2xl leading-[42px] tracking-[4.8px]'>
              EXIT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

