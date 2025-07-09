import axios from "axios";

async function AxiosFetch() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const list = response.data;

  return (
    <>
      <h1> Fetching Name using Axios</h1>
      <ul>
        {list.map((message:string, index:number) => (
          <li key={index}>{JSON.stringify(message,null,4)}</li>
        ))}
      </ul>
    </>
  );
}
export default AxiosFetch;
