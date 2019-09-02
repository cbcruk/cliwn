type state = {
  item: option(Api.detail),
  isFetching: bool,
};

type action =
  | Fetch
  | Loaded(Api.detail);

[@react.component]
let make = (~board, ~id) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Fetch => {...state, isFetching: true}
        | Loaded(item) => {item: Some(item), isFetching: false}
        },
      {item: None, isFetching: false},
    );

  React.useEffect2(
    () => {
      dispatch(Fetch);
      Api.fetchItem(~board, ~id, item => Loaded(item)->dispatch);
      None;
    },
    (board, id),
  );

  let {item} = state;

  <div>
    {switch (item) {
     | Some(item) =>
       <div>
         <h1> {React.string(item.subject)} </h1>
         <p>
           <span> {React.string(item.nickname)} </span>
           <span> {string_of_int(item.view_count)->React.string} </span>
         </p>
         <p>
           {React.string(item.created_date)}
           {React.string(item.ip)}
           {switch (item.updated_date) {
            | Some(date) => React.string({js|수정일|js} ++ date)
            | None => React.null
            }}
         </p>
         <table>
           <tbody>
             <tr>
               <th> {React.string({js|거래방법|js})} </th>
               <td> {React.string(item.how)} </td>
               <th> {React.string({js|판매상태|js})} </th>
               <td> {React.string(item.status)} </td>
               <th> {React.string({js|판매가격|js})} </th>
               <td> {React.string(item.price)} </td>
             </tr>
             <tr>
               <th> {React.string({js|구매시기|js})} </th>
               <td> {React.string(item.bought_date)} </td>
               <th> {React.string({js|거래지역|js})} </th>
               <td> {React.string(item.area)} </td>
             </tr>
           </tbody>
         </table>
         <div>
           {Array.map(image => <img key=image src=image />, item.images)
            ->React.array}
           {React.string(item.content)}
         </div>
       </div>
     | None => <div> {React.string("None")} </div>
     }}
  </div>;
};
