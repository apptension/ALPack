import CrossmarkSVG from 'assets/cross-mark.svg';

interface CrossmarkProps {
  isError?: boolean;
}

export const Crossmark = ({ isError }: CrossmarkProps) => {
  return (
    <CrossmarkSVG
      className={`w-4 h-4 mr-1.5 ${
        isError ? 'text-red-400' : 'text-gray-400'
      } flex-shrink-0`}
    />
  );
};
