import MenuItem from "./MenuItem";

export default function MenuList({ list = list }) {
  return (
    <>
      {list.map((item) => (
        <ul className="menu-list-container gap-4 ml-4">
          <MenuItem item={item} />
        </ul>
      ))}
    </>
  );
}
