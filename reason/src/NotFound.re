[@react.component]
let make = () => {
  <div>
    <h1> {React.string("Not Found")} </h1>
    <p>
      {ReasonReact.string(
         "The page you're looking for can't be found. Go home by ",
       )}
    </p>
    <Link href="/"> {ReasonReact.string("home")} </Link>
  </div>;
};
