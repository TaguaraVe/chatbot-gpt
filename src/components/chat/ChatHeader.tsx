'use client';
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/solid';

type Props = {
  chat: any;
};

export const ChatHeader = ({ chat }: Props) => {
  return (
    <div className="p-8 flex items-center justify-between ">
      <div className="flex justify-between items-center">
        <ChatBubbleLeftRightIcon />
        <h3 className="">{chat.title} TEST - Text</h3>
      </div>
      <div className="flex justify-between items-center">
        <PhoneIcon />
        <p className="">{chat.description}</p>
      </div>
    </div>
  );
};
