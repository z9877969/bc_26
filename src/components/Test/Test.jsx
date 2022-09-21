import { useState } from "react";

const menuListItem = [
  {
    id: "1",
    title: "Item-1",
    items: [
      {
        id: "1.1",
        title: "Item-1.1",
        items: [
          {
            id: "1.1.1",
            title: "Item-1.1.1",
          },
          {
            id: "1.1.2",
            title: "Item-1.1.2",
          },
        ],
      },
      {
        id: "1.2",
        title: "Item-1.2",
        items: [
          {
            id: "1.2.1",
            title: "Item-1.2.1",
          },
          {
            id: "1.2.2",
            title: "Item-1.2.2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Item-2",
    items: [
      {
        id: "2.1",
        title: "Item-2.1",
        items: [
          {
            id: "2.1.1",
            title: "Item-2.1.1",
          },
          {
            id: "2.1.2",
            title: "Item-2.1.2",
          },
        ],
      },
      {
        id: "2.2",
        title: "Item-2.2",
        items: [
          {
            id: "2.2.1",
            title: "Item-2.2.1",
          },
          {
            id: "2.2.2",
            title: "Item-2.2.2",
          },
        ],
      },
    ],
  },
];

const MenuList = ({ menuList = menuListItem }) => {
  const [menuId, setMenuId] = useState(null);
  return (
    <ul>
      {menuList?.map(({ id, title, items }) => (
        <li key={id} onClick={() => setMenuId(id)}>
          {menuId === id ? (
            <>
              <h2>{title}</h2>
              <MenuList menuList={items || null} />
            </>
          ) : (
            title
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
