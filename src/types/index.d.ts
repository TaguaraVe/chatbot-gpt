declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  email: string;
  password: string;
};

type User = {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
};
