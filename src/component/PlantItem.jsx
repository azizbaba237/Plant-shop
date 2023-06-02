
function handleClick(plantName) {
    alert(`vous allez acheter 1 ${plantName} ?good choice `)
}

function PlantItem({ id, name, price, cover }) {
    return (
        <li className=" relative flex-col capitalize m-3" onClick={() => handleClick()}>
            <span className="absolute rounded-t-[20px] rounded-br-[20px] bg-[#31b472] text-white p-[10px] right-0 top-0 font-semibold">
                {price}€
            </span>
            <img
                src={cover}
                alt={`${name} cover`}
                className="w-60 h-60 object-cover rounded-3xl"
            />
            <div>{name}</div>
        </li>
    )
}

export default PlantItem