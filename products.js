let products = [
    {
        name: "HTML",
        row: "",
        imageUrl: "Media/html-5-svgrepo-com.svg",


    },
    {
        name: "Bootstrap",
        row: "",
        imageUrl: "Media/bootstrap-svgrepo-com.svg",


    },
    {
        name: "CSS",
        row: "",
        imageUrl: "Media/css-3-svgrepo-com.svg",


    },
    {
        name: "GIT",
        row: "",
        imageUrl: "Media/git-svgrepo-com.svg",


    },
    {
        name: "GitHub",
        row: "",
        imageUrl: "Media/github-142-svgrepo-com.svg",


    },
    {
        name: "JavaScript",
        row: "",
        imageUrl: "Media/javascript-svgrepo-com.svg",


    },
    {
        name: "Node.Js",
        row: "",
        imageUrl: "Media/node-js-svgrepo-com.svg",


    },
    {
        name: "React",
        row: "",
        imageUrl: "Media/react-svgrepo-com.svg",


    },
    {
        name: "Sass",
        row: "",
        imageUrl: "Media/sass-svgrepo-com.svg",


    },
    {
        name: "MySQL",
        row: "",
        imageUrl: "Media/sql-database-generic-svgrepo-com.svg",


    },
    {
        name: "TypeScipt",
        row: "",
        imageUrl: "Media/typescript-svgrepo-com.svg",


    },
    {
        name: "VsCode",
        row: "",
        imageUrl: "Media/vscode-svgrepo-com.svg",


    }


]
for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
        document.getElementById("productsTable").innerHTML +=
            `<div class="row">
                <div class=" col-md-auto tech-container">

                    <img src="${products[i].imageUrl}" width="50px" height="50px" alt="${products[i].name} logo" class="m-2">
                    <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">${products[i].name}</p>
                </div>
                <div class=" col-md-auto  tech-container">

                    <img src="${products[i + 1].imageUrl}" width="50px" height="50px" alt="${products[i + 1].name} LOGO" class="m-2">
                    <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">${products[i + 1].name}</p>
                </div>
                <div class=" col-md-auto  tech-container">

                    <img src="${products[i + 2].imageUrl}" width="50px" height="50px" alt="${products[i + 2].name} Logo"
                        class="m-2">
                    <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">${products[i + 2].name}</p>
                </div>
                <div class=" col-md-auto  tech-container">

                    <img src="${products[i + 3].imageUrl}" width="50px" height="50px" alt="${products[i + 3].name} Logo"
                        class="m-2">
                    <p style=" font-family: 'Nunito', sans-serif; font-weight: 400; color: black;">${products[i + 3].name}</p>
                </div>
            </div>`
    }

}

let width = 0
// Function to change the color gradually while scrolling
function changeColorOnScroll() {
    var color = "#3185FC"; // Initial color value
    var targetColor = "#F91E15"; // Target color value
    var scrollSpeed = 1; // Adjust this value to control the speed of color change

    // Calculate the scroll percentage
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Calculate the color difference for each RGB component
    var startRGB = hexToRgb(color);
    var targetRGB = hexToRgb(targetColor);
    var diffRGB = {
        r: targetRGB.r - startRGB.r,
        g: targetRGB.g - startRGB.g,
        b: targetRGB.b - startRGB.b
    };
    // Calculate the new color value based on the scroll percentage and scroll speed
    var newColor = {
        r: startRGB.r + (diffRGB.r * scrollPercentage * scrollSpeed),
        g: startRGB.g + (diffRGB.g * scrollPercentage * scrollSpeed),
        b: startRGB.b + (diffRGB.b * scrollPercentage * scrollSpeed)
    };

    // Convert the RGB values back to a hexadecimal color code
    var newHexColor = rgbToHex(Math.round(newColor.r), Math.round(newColor.g), Math.round(newColor.b));

    // Apply the new color to your desired element or do something else with it
    // For example, you can change the fill color of the path element:
    let path = document.getElementsByClassName("path")

    for (let pat of path) { pat.setAttribute("style", `fill:${newHexColor}`) }
    //     path.setAttribute('style', `fill: ${newHexColor}`);
    document.getElementById("progressBar").style.width += 1
    console.log(scrollPercentage);
}
// Helper function to convert a hexadecimal color code to RGB values
function hexToRgb(hex) {
    var bigint = parseInt(hex.slice(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r, g, b };
}
// Helper function to convert RGB values to a hexadecimal color code
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

window.addEventListener("scroll", changeColorOnScroll);


