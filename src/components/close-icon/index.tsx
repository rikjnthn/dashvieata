const CloseIcon = ({ title }: CloseIconType) => {
  return (
    <div title={title}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0711 13.0711L27.2132 27.2132M13.0711 27.2132L27.2132 13.0711"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;

interface CloseIconType {
  title: string;
}
