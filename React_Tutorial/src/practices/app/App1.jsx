import Test1 from "../components/App1/Test1";

export default function App1() {
  return (
    <>
      <Test1
        as="p"
        num={1}
        value="This is Value"
        onClick={() => {
          console.log("I am Call");
        }}
      >
        This is P Tag.
      </Test1>
    </>
  );
}
