const Dropdown = ({className, name, items, onChange}) => {
    return (
        <div>
            <select className={className} name={name} onChange={event => onChange(event.target.value)}>
                { name === "Category" && 
                <>
                <option hidden>Filter by {name}</option>
                <option value="default">All Categories</option>
                </>
                }
                {
                items.map((item, index) => 
                    <option id={index} key={index} value={item} >{item}</option>
                )
            }
            </select>
        </div>
    );
};

export default Dropdown;