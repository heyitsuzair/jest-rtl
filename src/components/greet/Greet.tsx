import { GreetProps } from "./Greet.types";

const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h1>Page Heading</h1>
      <h2>Page Sub Heading</h2>
      Hello {name ? name : "Guest"}
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Enter Email" id="email" />
      <label htmlFor="description">Description</label>
      <textarea id="description"></textarea>
    </div>
  );
};

export default Greet;
