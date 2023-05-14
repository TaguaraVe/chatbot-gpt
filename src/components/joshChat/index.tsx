import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';

export const JoshChat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow "
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-primary-50 border border-primary-500 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-primary-700">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                {/* <ChatMessages className="px-2 py-3 flex-1" /> */}
                Mensaje
                <ChatInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
