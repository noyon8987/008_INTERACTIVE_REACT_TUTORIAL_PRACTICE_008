// import Test2 from "../components/App2/Test2";
import Demo2 from "../components/App2/Demo2";

export default function App2() {
  return (
    <>
      {/* <Test2 as="span" style={Test2.style.HEADING}>
        This is Paragraph Text.
      </Test2> */}
      <Demo2
        as="span"
        variant={Demo2.variant.PARAGRAPH}
        className={"bg-amber-500 px-6 py-2"}
        style={{
          textDecoration: "underline",
          color: "white",
          backgroundColor: "black",
        }}
        id="noyon"
      >
        I am a Demo Text.
      </Demo2>
    </>
  );
}
