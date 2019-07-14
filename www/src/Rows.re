open Belt;

[@react.component]
let make = (~page, ~items: Api.items) => {
  <table>
    <tbody>
      {Array.map(items, item =>
         <tr key={item.board_sn}>
           {switch (item.category) {
            | Some(category) => <td> {React.string(category)} </td>
            | _ => React.null
            }}
           <td>
             <Link href={page ++ "/" ++ item.board_sn}>
               {React.string(item.subject)}
             </Link>
           </td>
           <td> {React.string(item.nickname)} </td>
           <td> {string_of_int(item.hit)->React.string} </td>
           <td> {React.string(item.timestamp)} </td>
         </tr>
       )
       ->React.array}
    </tbody>
  </table>;
};
