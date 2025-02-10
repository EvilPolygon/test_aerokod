'useClient';

export default function Button(
  {
    color = 'default',
    onClick,
    children
  }
) {
  const buttonColor = {
    danger: 'bg-red-200 hover:bg-red-300',
    blue: 'bg-blue-100 hover:bg-blue-200',
    lime: 'bg-lime-100 hover:bg-lime-200',
    default: 'bg-slate-500 hover:bg-slate-400'
  }[color];

  return (
  <button
    onClick={onClick}
    className={`${buttonColor} rounded-md py-1 px-2 border border-transparent text-center transition-all shadow-md hover:shadow-lg`}
  >
    {children}
  </button>
  );
}