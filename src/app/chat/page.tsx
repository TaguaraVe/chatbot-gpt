'use client';
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';

import { ChatHeader } from '@/components/chat/ChatHeader';
import { StandardMessageForm } from '@/components/chat/StandardMessageForm';

console.log(process.env.NEXT_PUBLIC_PROJECT_ID);
const Chat = () => {
  const chatProps = useMultiChatLogic(
    process.env.NEXT_PUBLIC_PROJECT_ID,
    'taguara',
    'webDeveloper_01'
  );
  return (
    <section className="min-h-[calc(100vh-287px)] bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
      <div className="basis-full bg-rose-300 ">
        <h1>Chat component</h1>

        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
          {...chatProps}
          style={{ height: '50vh' }}
          renderChatHeader={(chat) => <ChatHeader chat={chat} />}
          renderMessageForm={(props) => {
            return (
              <StandardMessageForm props={props} activeChat={chatProps.chat} />
            );
          }}
        />
      </div>
    </section>
  );
};
export default Chat;
