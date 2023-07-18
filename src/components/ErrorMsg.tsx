interface IErrorMessageProps {
  error: string;
}

export const ErrorMsg = ({ error }: IErrorMessageProps) => {
  return <p className="text-center text-red-500">{error}</p>;
};
