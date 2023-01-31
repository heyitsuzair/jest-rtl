import { GreetProps } from "./Greet.types";

const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h1>Page Heading</h1>
      <h2>Page Sub Heading</h2>
      <p>Greet Me</p>
      <span title="Close"></span>
      Hello {name ? name : "Guest"}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Enter Email"
        id="email"
        value="Hello Uzair"
        onChange={() => {}}
      />
      <label htmlFor="description">Description</label>
      <textarea id="description"></textarea>
      <label htmlFor="short_desc">Description</label>
      <select name="short_desc" id="short_desc"></select>
      <label>
        <input type="text" /> I Agree
      </label>
    </div>
  );
};

export default Greet;
