import { useSetting } from "../../context/setting-context";

const InformationSection = ({
  label,
  message,
}: InformationSectionPropsType) => {
  const { fontSize } = useSetting();

  return (
    <div className="p-2.5 dark:text-white">
      <div
        className="mb-2.5 px-4 font-medium"
        style={{
          fontSize: fontSize.bigger,
          lineHeight: "1.56",
        }}
      >
        {label}
      </div>
      <div
        className="border-grey-200/50 rounded-md border px-4 py-2.5"
        style={{
          fontSize: fontSize.normal,
          lineHeight: "1.56",
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default InformationSection;

interface InformationSectionPropsType {
  label: string;
  message: string;
}
