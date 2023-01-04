export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  console.log("we are get the api");
  return { props: { data } };
}

function NewMeetUpPage({ data }) {
  return (
    <div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewMeetUpPage;
