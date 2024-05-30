interface IButton {
  text?: string;
  type?: string;
  onClick?: () => void;
}

export function Button({
  text = "Ingresar",
  onClick,
  type = "submit",
}: IButton) {
  return (
    <>
      {type == "submit" ? (
        <div>
          <button
            onClick={onClick}
            className="py-2 px-4 bg-primary-600 hover:bg-primary-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
          >
            {text}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={onClick}
            className="py-2 px-4 bg-primary-600 hover:bg-primary-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="button"
          >
            {text}
          </button>
        </div>
      )}
    </>
  );
}
