let ans = 0;
fetch("WEEK6_JSON.json")
    .then(response => response.json())
    .then(estRec => {

       estRec.forEach(house => {
            image = house.image;
            ans = house.assessments.land_value + house.assessments.building_value;
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + "<br>" + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            div = `<div>
                <div><img src="${image}" height="300" width="300"></div>
                <h3>Parcel ID</h3><p>${house.parcel}</p>
                <h3>Last Sell Date ID</h3><p>${date}</p>
                <h3>Owner Name</h3><p>${name}</p>
                <h3>Address</h3><p>${address}</p>
                <h3>Mort. Est.</h3><p>${avg}</p>
                <h3>Beds</h3><p>${house.beds}</p>
                <h3>Baths</h3><p>${house.baths}</p>
                <h3>Est. Value</h3><p>${ans}</p>
            </div>`;
        });
    document.getElementById("realest").innerHTML = div;
});
