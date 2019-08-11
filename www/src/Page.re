type state = {
  items: Api.items,
  isFetching: bool,
};

type action =
  | Fetch
  | Loaded(Api.items);

[@react.component]
let make = (~page) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Fetch => {...state, isFetching: true}
        | Loaded(items) => {items, isFetching: false}
        },
      {items: [||], isFetching: false},
    );

  React.useEffect1(
    () => {
      dispatch(Fetch);
      Api.fetchItems(page, items => Loaded(items)->dispatch);
      None;
    },
    [|page|],
  );

  let {items} = state;

  <div> <Rows page items /> <Nav /> </div>;
};
