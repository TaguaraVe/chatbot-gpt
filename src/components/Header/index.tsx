'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaSignInAlt, FaTimes, FaUserPlus } from 'react-icons/fa';

import logo from '../../../public/assets/images/logos/td-trans.png';
import { removeUser, selectCurrentUser } from '@/redux/users/userSlice';

const links = [
  {
    label: 'Inicio',
    icon: '/assets/images/home.svg',
    size: 24,
    route: '/',
    show: '1',
  },
  {
    label: 'Servicios',
    icon: '/assets/images/services.svg',
    size: 24,
    route: '/services',
    show: '1',
  },
  {
    label: 'Chat',
    icon: '/assets/images/about.svg',
    size: 24,
    route: '/chat',
    show: '1',
  },
  {
    label: 'Calculadora de Volumen',
    icon: '/assets/images/calculator.svg',
    size: 24,
    route: '/calculator',
    show: '2',
  },
  {
    label: 'Contacto',
    icon: '/assets/images/contact.svg',
    size: 24,
    route: '/contact',
    show: '1',
  },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModalPerfil, setShowModalPerfil] = useState(false);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setShowModalPerfil(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/newregister');
  };

  const handleOpenModalProfile = () => {
    setShowModalPerfil(true);
  };

  const handleProfile = () => {
    setShowModalPerfil(false);
    router.push('/profile');
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  console.log(currentUser);

  return (
    <>
      <header>
        <button
          className="hover:text-primary-200 lg:hidden ml-4"
          onClick={handleShowToggleMenu}
        >
          {!showMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
        </button>

        <Link href="/">
          <div className="flex items-center">
            <div className="h-10 w-10 md:h-20 md:w-20">
              <Image src={logo} alt="Logo" className="w-full" />
            </div>
            <div className="hidden lg:block font-bold text-xl">
              <p className="text-tdGreen">{'Te conecta con'}</p>
              <p className="text-tdOrange">{'tu audiencia'}</p>
            </div>
          </div>
        </Link>

        <nav className="flex lg:flex-row-reverse justify-between items-center">
          <div>
            {currentUser.firstName ? (
              <div className="flex space-x-2 ">
                <button
                  className="w-8 h-8 md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]  md:ml-12 bg-primary-200 hover:bg-primary-300 rounded-full flex justify-center items-center text-base md:text-xl"
                  onClick={() => handleOpenModalProfile()}
                >
                  {currentUser.firstName[0].toUpperCase() +
                    currentUser.lastName[0].toUpperCase()}
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 ">
                <button
                  className="hidden md:block btn btnSecond px-2"
                  onClick={() => handleLogin()}
                >
                  Ingresar
                </button>
                <button className="md:hidden" onClick={() => handleLogin()}>
                  <FaSignInAlt size={16} />
                </button>
                <button
                  className="hidden md:block btn px-2"
                  onClick={() => handleRegister()}
                >
                  Registrarse
                </button>
                <button className="md:hidden" onClick={() => handleRegister()}>
                  <FaUserPlus size={20} />
                </button>
              </div>
            )}
          </div>

          <ul
            onClick={handleShowToggleMenu}
            className={`menuMobile ${
              showMenu ? 'translate-x-0' : '-translate-x-full'
            } lg:menuDesktop xl:-translate-x-36`}
          >
            {links.map((link) => {
              return (
                <li
                  className={`${
                    link.show === '2' ? 'lg:hidden' : ''
                  } headerLink`}
                  key={link.label}
                >
                  <Link href={link.route} className="flex space-x-2">
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={link.size}
                      height={link.size}
                      className="lg:hidden"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {showModalPerfil && (
        <div className="absolute bg-primary-700 w-36 h-20  top-[var(--header-heigth)] right-10 z-40 p-4 text-white flex flex-col">
          <button
            className="text-left font-semibold cursor-pointer"
            onClick={handleProfile}
          >
            Perfil
          </button>
          <button className="text-left cursor-pointer " onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </>
  );
};
