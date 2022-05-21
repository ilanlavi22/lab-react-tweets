const User = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <span>&#64; {props.handle}</span>
    </>
  );
};
export default User;