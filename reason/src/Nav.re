let words = ["sold", "news", "maclien"];

[@react.component]
let make = () => {
  <div>
    {Array.of_list(words)
     |> Array.map(word =>
          <Link key=word href={"/" ++ word}> {React.string(word)} </Link>
        )
     |> React.array}
  </div>;
};
