import Demo from "./Demo";

/* eslint-disable react/prop-types */
export default function Test(props) {
    const {as, children, ...rest} = props;
    const {value} = rest;
    const Tag = as;

  return (
    <>
      <Tag>{children}</Tag>
      <p>{value}</p>
      <Demo {...rest}/>
    </>
  );
}
