const Tag = ({ name, index, onDelete, hashtag, hashtagStyle }) => {
  return (
    <li>
      {hashtag && (
        <span style={{ color: "#898989", fontWeight: "bold", ...hashtagStyle }}>
          #{" "}
        </span>
      )}
      {name}
      <a href="#" onClick={(e) => onDelete(index, e)}>
        x
      </a>
    </li>
  );
};
export default Tag;
