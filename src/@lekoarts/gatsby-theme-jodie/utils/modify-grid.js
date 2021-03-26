const modifyGrid = (data) => fillGrid(data);
  
// fill grid with some options
function fillGrid(originalData) {
    const dataOriginal = [...originalData];
    let data = [];
    let stappen = [];
    let team;
    let teamKey;
    let first;

    // Only show pages
    for(let i = 0; i < dataOriginal.length; i++) {
        if(dataOriginal[i].__typename === "MdxPage") {
            data.push(dataOriginal[i]);
        } else {
            stappen.push(dataOriginal[i]);
        }
    }

    // Set Team page as first item
    for(let i = 0; i < data.length; i++) {
        if(data[i].title === "Team") {
            team = data[i];
            teamKey = i;
        }
    }

    first = data[0];
    data[0] = team;
    data[teamKey] = first;

    // add Stappen page
    let stappenPage = {
        __typename: "MdxPage",
        slug: "/stappen",
        title: "Stappen",
        cover: stappen[0].cover,
    };
    data.push(stappenPage);
    return data;
}

export default modifyGrid;