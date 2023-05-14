type Props = {};
export const ChatHeader = (props: Props) => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-black">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs">Soy Murutina</p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-secondary-400" />
          <p className="font-semibold">¿Te ayudo?</p>
        </div>
      </div>
    </div>
  );
};
