import classes from "./comment-list.module.css";

function CommentList({ items }) {
  console.log(items);
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
