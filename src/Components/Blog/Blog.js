import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-slate-200 text-left py-4 px-8 m-5 font-serif shadow-2xl">
        <h2 className="text-2xl mb-2">
          1. What is the purpose of React Router?
        </h2>
        <p>
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. By preventing a page refresh, and using Router or Link,
          which is explained in more depth below, the flash of a white screen or
          blank page is prevented. This is one increasingly common way of having
          a more seamless user experience. React router also allows the user to
          utilize browser functionality like the back button and the refresh
          page while maintaining the correct view of the application.
        </p>
      </div>
      <div className="bg-slate-200 text-left py-4 px-8 m-5 font-serif shadow-2xl">
        <h2 className="text-2xl mb-2">2. How does Context API Works?</h2>
        <p>
          It returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state.Context is primarily used when some data needs to be
          accessible by many components at different nesting levels. Apply it
          sparingly because it makes component reuse more difficult. If you only
          want to avoid passing some props through many levels, component
          composition is often a simpler solution than context.
        </p>
      </div>
      <div className="bg-slate-200 text-left py-4 px-8 m-5 font-serif shadow-2xl">
        <h2 className="text-2xl mb-2">
          3. What do you know about useRef Hook in React?
        </h2>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.useState
          returns 2 properties or an array. One is the value or state and the
          other is the function to update the state. In contrast, useRef returns
          only one value which is the actual data stored. When the reference
          value is changed, it is updated without the need to refresh or
          re-render.
        </p>
      </div>
    </div>
  );
};

export default Blog;
