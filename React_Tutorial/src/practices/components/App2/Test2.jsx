/* eslint-disable react/prop-types */
const styleType = {
  HEADING: "heading",
  PARAGRAPH: "paragraph",
};

const styles = {
  paragraph: "text-xl font-semibold text-red-400",
  heading: "text-5xl font-bold text-red-800",
};

export default function Test2(props) {
  const { as, children, style } = props;
  const Tag = as;

  let className = styles[style];

  return <Tag className={className}>{children}</Tag>;
}

Test2.style = styleType;

Object.freeze(Test2);
