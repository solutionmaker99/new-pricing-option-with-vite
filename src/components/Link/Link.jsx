const Link = ({ route }) => {
  return (
    <li className="mr-10 my-4 text-yellow-400 font-medium text-xl">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
