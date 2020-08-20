import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript frmawork'
    },
    {
        title: 'Why use REACT js?',
        content: 'Cause its famuos'
    },
    {
        title: 'How do you use React',
        content: 'You read the components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of blue' ,
        value: 'blue'
    }
];

export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div>

            <Header />

            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                {showDropdown ?
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectChange={setSelected}
                />
                : null }
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>

        </div>
    );
};