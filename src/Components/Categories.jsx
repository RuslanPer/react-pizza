import React from 'react'

function Categories({ items, onClickItem }) {

    const [state, setstate] = useState(initialState)

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index) => 
                    <li 
                        onClick={() => onClickItem(name)}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories
