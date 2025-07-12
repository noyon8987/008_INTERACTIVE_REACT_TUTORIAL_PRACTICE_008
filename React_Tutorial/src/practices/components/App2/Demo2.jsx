/* eslint-disable react/prop-types */
const variantTypes = {
  HEADING: "heading",
  PARAGRAPH: "paragraph",
};

const variants = {
  heading: "text-5xl font-bold text-red-700 ",
  paragraph: "text-xl font-bold ",
};

export default function Demo2(props) {
  const { children, as, variant, className = "", ...others } = props;
  const Tag = as;

  const variantName = variants[variant] + className;

  return (
    <Tag className={variantName} {...others}>
      {children}
    </Tag>
  );
}

Demo2.variant = variantTypes;
