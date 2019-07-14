type item = {
  category: option(string),
  subject: string,
  nickname: string,
  hit: int,
  timestamp: string,
  author_id: string,
  board_sn: string,
  comment_count: int,
}
and items = array(item);

type detail = {
  category: string,
  how: string,
  status: string,
  price: string,
  bought_date: string,
  area: string,
  nickname: string,
  subject: string,
  view_count: int,
  created_date: string,
  updated_date: option(string),
  ip: string,
  content: string,
  images: array(string),
  writer: string,
};

module Decode = {
  let item = json =>
    Json.Decode.{
      category: json |> field("category", string)->optional,
      subject: json |> field("subject", string),
      nickname: json |> field("nickname", string),
      hit: json |> field("hit", int),
      timestamp: json |> field("timestamp", string),
      author_id: json |> field("author_id", string),
      board_sn: json |> field("board_sn", string),
      comment_count: json |> field("comment_count", int),
    };

  let responseItems = json =>
    Json.Decode.(json |> field("items", array(item)));

  let responseItem = (json): detail =>
    Json.Decode.{
      category: json |> field("category", string),
      how: json |> field("how", string),
      status: json |> field("status", string),
      price: json |> field("price", string),
      bought_date: json |> field("bought_date", string),
      area: json |> field("area", string),
      nickname: json |> field("nickname", string),
      subject: json |> field("subject", string),
      view_count: json |> field("view_count", int),
      created_date: json |> field("created_date", string),
      updated_date: json |> field("updated_date", string)->optional,
      ip: json |> field("ip", string),
      content: json |> field("content", string),
      images: json |> field("images", array(string)),
      writer: json |> field("writer", string),
    };
};

let fetchItems = (page, callback) =>
  Js.Promise.(
    Fetch.fetch("/api/" ++ page)
    |> then_(Fetch.Response.json)
    |> then_(json =>
         json
         |> Decode.responseItems
         |> (
           items => {
             callback(items);
             resolve();
           }
         )
       )
    |> ignore
  );

let fetchItem = (page, id, callback) =>
  Js.Promise.(
    Fetch.fetch({j|/api/$page?id=$id|j})
    |> then_(Fetch.Response.json)
    |> then_(json =>
         json
         |> Decode.responseItem
         |> (
           item => {
             callback(item);
             resolve();
           }
         )
       )
    |> ignore
  );
