type state = {
  items: Api.items,
  isFetching: bool,
};

type action =
  | Fetch
  | Loaded(Api.items);

[@react.component]
let make = (~board) => {
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
      Api.fetchItems(~board, items => Loaded(items)->dispatch);
      None;
    },
    [|board|],
  );

  let {items} = state;

  <div> <Rows board items /> <Nav /> </div>;
};
