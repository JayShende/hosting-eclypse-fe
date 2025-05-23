interface SizeButtonProps {
  size: string;
  selected: boolean;
  toggleSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const SizeButton = ({ size, selected, toggleSelect }: SizeButtonProps) => {
  return (
    <>
      {selected ? (
        <div
          className="sm:w-20 w-16 sm:h-12 h-11 sm:px-8 px-6 sm:py-3.5 rounded bg-neutral-900 flex cursor-pointer"
          onClick={() => {
            toggleSelect(!selected);
          }}
        >
          <span className="text-neutral-100 text-sm sm:text-lg font-Poppins flex justify-center items-center cursor-pointer">
            {size}
          </span>
        </div>
      ) : (
        <div
          className="sm:w-20 w-16 sm:h-12 h-11 sm:px-8 px-6 sm:py-3.5 rounded bg-zinc-300 flex cursor-pointer"
          onClick={() => {
            toggleSelect(!selected);
          }}
        >
          <span className="text-neutral-500 text-sm sm:text-lg  font-Poppins flex justify-center items-center">
            {size}
          </span>
        </div>
      )}
    </>
  );
};

export default SizeButton;
