type route =
  | Page(string)
  | Detail(string, string)
  | NotFound;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let route =
    switch (url.path) {
    | [board] => Page(board)
    | [board, id] => Detail(board, id)
    | _ => NotFound
    };

  <div>
    {switch (route) {
     | Page(board) => <Page board />
     | Detail(board, id) => <Detail board id />
     | NotFound => <NotFound />
     }}
  </div>;
};
