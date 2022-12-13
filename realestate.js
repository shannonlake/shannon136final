let value = 0;
fetch("houses.json")
    .then(response => response.json())
    .then(estRec => {
      var div = "";
      var listinginfo = "";
       estRec.forEach(house => {
            ct = 0;
            btnid = house.parcel + "btn";
            image = house.image;
            value = house.assessments.land_value + house.assessments.building_value;
            ans = value.toLocaleString("en-US");
            date = house.deed_date.substr(0,10);
            name = house.owner_name.first + " " + house.owner_name.last;
            address = house.owner_address.street + "<br>" + house.owner_address.city + ", " + house.owner_address.state + ", " + house.owner_address.zip;
            avg = (house.quarter_payments[0] + house.quarter_payments[1] + house.quarter_payments[2] + house.quarter_payments[3])/4;
            div += `
                <div class="col">
                <div class="col p-3 houseblock">
                <div class="housepic"><img src="${image}"></div>
                <div class="housetext">
                ${address}</br>
                ${house.beds} Beds | ${house.baths} Baths</br>
                <strong>$${ans}</strong></p>
                </div>
                <button class="btn btn-primary listingbtn" id="${btnid}" type="button" onclick="on(this.value)" value="${house.parcel}">View Listing</button>
            </div>
            </div>`;

            listinginfo += `
            <div id="${house.parcel}" class="overlay" onclick="this.style.display='none'">
            <div id="listing-info">
            <div id="overlayimg"><img src="${image}"></div>
            <p><span class="overlayprice">$</strong>${ans}<span></br>
            <strong>Parcel ID:</strong> ${house.parcel}</br>
            <strong>Mort. Est:</strong> ${avg}</br>
            <strong>Owner Name:</strong> ${name}</br>
            <strong>Last Sold:</strong> ${date}</br>
            </p>
            </div>


            <div id="rightside">
            <h2>More about this property</h2>
            <div class="infoForm">
              <form action="/action_page.php" target="_blank" method="post">
                <input class="inputform" type="text" id="fname" name="fname" placeholder="First Name"><br>
                <input class="inputform" type="text" id="lname" name="lname" placeholder="Last Name"><br>
                <input class="inputform" type="text" id="phone" name="phone" placeholder="Phone"><br>
                <input class="inputform" type="text" id="email" name="email" placeholder="Email"><br><br>
                <input class="btn btn-primary listingbtn" type="submit" value="Submit">
              </form>
              </div>
              </div>
              </div>`;
        });
    document.getElementById("realest").innerHTML = div;
    document.getElementById("overlaydivs").innerHTML = listinginfo;

});
