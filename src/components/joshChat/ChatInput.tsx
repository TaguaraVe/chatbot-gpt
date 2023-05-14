'use client';
import { useContext, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useMutation } from '@tanstack/react-query';
import { nanoid } from 'nanoid';

import { cn } from '@/lib/utils';
import { Message } from '@/lib/validators/message';

type Props = {
  className: HTMLDivElement;
};

export const ChatInput = ({ className, ...props }: Props) => {
  const [input, setInput] = useState<string>('');

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [message] }),
      });
      return response.body;
    },
    onSuccess: () => {
      console.log('Exito');
    },
  });

  return (
    <div {...props} className={cn('border-t-2 border-primary-800', className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <h2 className="font-semibold">
          Hola Soy Marutina tu asistente personal como puedo ayudarte
        </h2>
        <TextareaAutosize
          // ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          rows={2}
          maxRows={4}
          value={input}
          autoFocus
          // disabled={isLoading}
          onChange={(e) => setInput(e.target.value)}
          placeholder="como  te ayudamos..."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 px-2 bg-primary-100 py-1.5 text-black focus:ring-0 text-sm sm:leading-6 placeholder:text-secondary-600"
        />
      </div>
    </div>
  );
};
