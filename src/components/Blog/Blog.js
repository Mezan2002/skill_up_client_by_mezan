import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-2xl font-bold mt-10">Blogs</h2>
      <div className="collapse w-11/12 lg:w-1/2 mx-auto my-10 rounded-xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          what is cors?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Cross-Origin Resource Sharing (CORS) Cross-Origin Resource Sharing
            (CORS) is an HTTP-header based mechanism that allows a server to
            indicate any origins (domain, scheme, or port) other than its own
            from which a browser should permit loading resources. CORS also
            relies on a mechanism by which browsers make a "preflight" request
            to the server hosting the cross-origin resource, in order to check
            that the server will permit the actual request. In that preflight,
            the browser sends headers that indicate the HTTP method and headers
            that will be used in the actual request.
          </p>
        </div>
      </div>
      <div className="collapse w-11/12 lg:w-1/2 mx-auto my-10 rounded-xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Firebase is from google which is a trusted company for that
            reason we use firebase.
            <br />
            Top Alternatives to Firebase Authentication Auth0. A set of unified
            APIs and tools that instantly enables Single Sign On and user
            management to all your applications. ... MongoDB. MongoDB stores
            data in JSON-like documents that can vary in structure, offering.
            ... Passport. ... Okta. ... Firebase. ... JSON Web Token. ...
            Keycloak. ... Amazon Cognito.
          </p>
        </div>
      </div>
      <div className="collapse w-11/12 lg:w-1/2 mx-auto my-10 rounded-xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does the private route work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
      </div>
      <div className="collapse w-11/12 lg:w-1/2 mx-auto my-10 rounded-xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title uppercase bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
