type route = 
  | Page(string)
  | Detail(string, string)
  | NotFound;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let route = switch (url.path) {
    | [page] => Page(page)
    | [page, id] => Detail(page, id)
    | _ => NotFound
  };

  <div>
    {switch (route) {
     | Page(page) => <Page page />
     | Detail(page, id) => <Detail page id />
     | NotFound => <NotFound />
     }}
  </div>;
};
