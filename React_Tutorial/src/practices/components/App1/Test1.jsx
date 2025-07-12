/* eslint-disable react/prop-types */
import Demo1 from "./Demo1";

export default function Test(props) {
  const { as, children, ...rest } = props;
  const { value } = rest;
  const Tag = as;

  return (
    <>
      <Tag>{children}</Tag>
      <p>{value}</p>
      <Demo1 {...rest} />
    </>
  );
}
