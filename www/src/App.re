[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <div>
    {switch (url.path) {
     | [page] => <Page page />
     | [page, id] => <Detail page id />
     | _ => <NotFound />
     }}
  </div>;
};
