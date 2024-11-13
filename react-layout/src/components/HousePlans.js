import axios from "axios";
import { useEffect, useState } from "react";
import AddHousePlan from "./AddHousePlan";
import HousePlan from "./HousePlan";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //wait until after page is rendered to do the asyncronous loading
    useEffect(() => {
        (async () => {
        const response = await axios.get("http://localhost:3001/api/house_plans");
        setHouses(response.data);
        })();
    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    return (
        <div className="house-plans">
        <h3>House Plans</h3>

        <button id="add-house" onClick={openAddDialog}>+</button>

        {showAddDialog ? (
            <AddHousePlan closeDialog={closeAddDialog}
        />
        ):("")}
        

        <div className="columns">
            {houses.map((housePlan) => (
            <HousePlan
                name={housePlan.name}
                size={housePlan.size}
                bedrooms={housePlan.bedrooms}
                bathrooms={housePlan.bathrooms}
                main_image={housePlan.main_image}
            />
            ))}
        </div>
        </div>
    );
};

export default HousePlans;