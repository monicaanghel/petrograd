       const template = document.querySelector("#myTemp").content;

        const imglink = "https://kea-alt-del.dk/t5/site/imgs/"

        fetch("http://kea-alt-del.dk/t5/api/productlist").then(e => e.json()).then(data => data.forEach(showData))


        function showData(oneObject) {
            console.log(oneObject.name);
            let clone = template.cloneNode(true)
            clone.querySelector("h1").textContent = oneObject.name;
            clone.querySelector("h2 span").textContent = oneObject.price;
            clone.querySelector("img").src = imglink + "small/" + oneObject.image + "-sm.jpg";
            clone.querySelector(".discount span").textContent = oneObject.discount;
            clone.querySelector(".soldout span").textContent = oneObject.soldout;

            clone.querySelector(".shortdescription span").textContent = oneObject.shortdescription;
            clone.querySelector(".vegetarian span").textContent = oneObject.vegetarian;
            clone.querySelector(".alcohol span").textContent = oneObject.alcohol;

            if(oneObject.category== "starter"){
                document.querySelector(".container1").appendChild(clone);
            }
            if(oneObject.category== "main"){
                document.querySelector(".container2").appendChild(clone);
            }
            if(oneObject.category== "dessert"){
                document.querySelector(".container3").appendChild(clone);
            }
            if(oneObject.category== "drinks"){
                document.querySelector(".container4").appendChild(clone);
            }
            if(oneObject.category== "sideorders"){
                document.querySelector(".container5").appendChild(clone);
            }


        }

