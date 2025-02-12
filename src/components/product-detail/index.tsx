import InformationSection from "../information-section";

const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-2.5 px-4">
      <InformationSection label="Product Id" message="uxjyebgrf" />
      <InformationSection label="Product Name" message="Nice T-shirt" />
      <InformationSection
        label="Product Description"
        message="Nice T-shirt. T-shirt that is comfortable and durable but still affordable. Material: Cotton"
      />
      <InformationSection label="Product Price" message="$ 20.00" />
      <InformationSection label="Product Stock" message="10" />
    </div>
  );
};

export default ProductDetail;
