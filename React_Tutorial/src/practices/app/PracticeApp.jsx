import Test from "../components/Test";

export default function PracticeApp() {
  return (
    <>
      <Test
        as="p"
        num={1}
        value="This is Value"
        onClick={() => {
          console.log("I am Call");
        }}
      >
        This is P Tag.
      </Test>
    </>
  );
}
