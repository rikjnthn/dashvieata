const InformationSection = ({ label, message }: InformationSectionType) => {
  return (
    <div className="p-2.5">
      <div className="mb-2.5 px-4 font-medium">{label}</div>
      <div className="border-grey-200-50 rounded-md border px-4 py-2.5 text-sm">
        {message}
      </div>
    </div>
  );
};

export default InformationSection;

interface InformationSectionType {
  label: string;
  message: string;
}
