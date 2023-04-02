const chartData = [
    { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
    {
        id: "dep-6",
        name: "Human Resourcing",
        ticketCount: 35,
        colour: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
];

const getData = () =>
    new Promise((resolve) => {
        setTimeout(resolve, 500, chartData);
    });


const filter = (arr) => {
    return arr.sort((a,b) => a.ticketCount - b.ticketCount)
}

let barConstructor = (id, name, ticketCount, colour) => {
    return `
        <div class="tooltips" id="${id}" style="background-color: ${colour}; height: calc(${ticketCount}px * 8); width: 100px; margin-right:10px;">
        <span class="tooltipsText">${name} (${ticketCount}) </span>
        </div>
    `
}

let doc = document.getElementById("chart")

let showData = async () => {
    await getData().then(res => {
        filter(res).forEach(element => {
            const sigleBar = barConstructor(element.id, element.name, element.ticketCount, element.colour)
            doc.insertAdjacentHTML("beforeend", sigleBar)
        });
    })
}

showData()