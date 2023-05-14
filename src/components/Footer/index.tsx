import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/assets/images/logos/td-trans.png';

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="text-sm md:text-base lg:text-lg px-4  md:px-8 lg:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Link href="/">
          <div className="h-10 w-10 md:h-20 md:w-20">
            <Image src={logo} alt="Logo" className="w-full" />
          </div>
        </Link>
        <div>
          <p className="text-center text-2xl text-secondary-700 font-bold">
            Siguenos en:
          </p>
          <div className="flex justify-center items-center space-x-2 lg:space-x-3 mt-2 lg:mt-4">
            <span>
              <Image
                src={'/assets/images/logos/instagram.png'}
                alt="instagram logo"
                width={48}
                height={48}
                className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
              />
            </span>
            <span>
              <Image
                src={'/assets/images/logos/facebook.png'}
                alt="facebook logo"
                width={48}
                height={48}
                className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
              />
            </span>
            <span>
              <Image
                src={'/assets/images/logos/linkedin.png'}
                alt="linkedin logo"
                width={48}
                height={48}
                className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
              />
            </span>
          </div>
        </div>

        <div className="hidden md:flex md:text-right">
          <div className="flex-col w-full">
            <p
              onClick={() => router.push('/faq')}
              className="cursor-pointer mb-2 hover:underline "
            >
              Preguntas frecuentes
            </p>
            <p
              onClick={() => alert('ir cookies')}
              className="cursor-pointer mb-2 hover:underline"
            >
              Política de Cookies
            </p>
          </div>
        </div>
      </div>
      <p className="absolute bottom-0 text-center text-xs md: mt-8">
        Taguara Digital @2023. Todos los derechos reservados.
      </p>
    </footer>
  );
};
