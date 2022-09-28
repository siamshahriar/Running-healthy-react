import React from "react";
import "./Qa.css";

const Qa = () => {
  return (
    <div>
      <div className="QA">
        <p>Q1. How does react work?</p>
        <p>
          Ans. While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser’s DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it’s worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.{" "}
        </p>
      </div>
      <div className="QA">
        <p>Q2. What is the difference between props and state?</p>
        <p>
          Ans. Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components. The setState property is used to
          update the state values in the component.
        </p>
      </div>
      <div className="QA">
        <p>
          Q3. What are the uses of useState in React besides loading Data from
          API?
        </p>
        <p>
          Ans. 1. Runs After Every Render: The first is the default case. If you
          do not pass the dependency array to the useEffect hook, the callback
          function executes on every render. Thus React will run the side effect
          defined in it after every render. <br />
          2. Runs Only Once After Initial Render: You may want to run the side
          effect just once after the initial render. A typical case will be
          fetching data making an API call, and storing the response in the
          state variable after the initial render. You do not want to make this
          API call again. You can pass an empty array as the second argument to
          the useEffect hook to tackle this use case. <br />
          3. Runs After State Value Changes: You may need to run a side effect
          depending on a state value. For example, you may have a side effect to
          prepare a greeting message based on a spoken language(English,
          Spanish, Hindi, Tamil, etc.). Here the spoken language value is stored
          in a state variable. Every time we select a spoken language, the state
          gets updated. As the state value gets updated, you want to recreate
          the greeting message. To solve this use case, you must pass the state
          variable to the useEffect hook as part of the dependency array. <br />
          4. Runs After Props Value Change: Just like the state, we can also use
          props as a dependency to run the side effect. In this case, the side
          effect will run every time there is a change to the props passed as a
          dependency. <br />
          5. Runs After Props and State Value Change: What if you need to run
          the side effect every time a combination of state and props change.
          This use case may occur when your side effect depends on the state and
          props values. In this case, you need to pass both the state and props
          variables as dependencies.
        </p>
      </div>
    </div>
  );
};

export default Qa;
