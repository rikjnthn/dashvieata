import { useSetting } from "../../context/setting-context";

const DirectArrow = ({ title }: DirectArrowPropsType) => {
  const { colorScheme } = useSetting();

  return (
    <div title={title}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2071 6.04289C12.8166 5.65237 12.1834 5.65237 11.7929 6.04289L5.42893 12.4069C5.03841 12.7974 5.03841 13.4305 5.42893 13.8211C5.81946 14.2116 6.45262 14.2116 6.84315 13.8211L12.5 8.16421L18.1569 13.8211C18.5474 14.2116 19.1805 14.2116 19.5711 13.8211C19.9616 13.4305 19.9616 12.7974 19.5711 12.4069L13.2071 6.04289ZM11.5 19.25C11.5 19.8023 11.9477 20.25 12.5 20.25C13.0523 20.25 13.5 19.8023 13.5 19.25H11.5ZM11.5 6.75V19.25H13.5V6.75H11.5Z"
          fill={colorScheme === "Dark" ? "#00CC00" : "#008000"}
        />
      </svg>
    </div>
  );
};

export default DirectArrow;

interface DirectArrowPropsType {
  title: string;
}
