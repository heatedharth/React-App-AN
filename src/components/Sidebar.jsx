import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
    let [newMenuItem, setNewMenuItem] = useState("");
    // TODO: 2 Using a state hook, maintain the current menu items as an array state.
    let [menuItems, setMenuItems] = useState(initialMenuItems);
    let [filter, setFilter] = useState("");
    // Adds a single string passed in as parameter to the state element
    // "menuItems" that holds the set of current menu items.

    // TODO: 3
    let addMenuItem = useCallback(() => {
        console.log("Added menu item")
        if (newMenuItem.trim() !== "") {
            setMenuItems((prevMenuItems) => [newMenuItem, ...prevMenuItems])
            setNewMenuItem("")
        }
    }, [newMenuItem])

    // TODO: 4
    let filteredMenuItems = menuItems.filter((item) =>
        new RegExp(filter, "i").test(item)
    )

    // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
    // its own item.
    return (
        <div>
            <input>
                type="text"
                id="newMenuItemValue"
                value={newMenuItem}
                onChange={(event) => setNewMenuItem(event.target.value)}
            </input>
            <br />
            <button onClick={addMenuItem}>Add Item</button>
            <br />
            <input>
                id="filter"
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Filter by..."
            </input>
            <br />
            <ul>
                {filteredMenuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
