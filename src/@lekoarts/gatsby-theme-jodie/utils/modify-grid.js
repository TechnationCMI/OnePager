const modifyGrid = (data) => shuffle(data);
  
function shuffle(originalData) {
    const dataOriginal = [...originalData];
    const data = [];

    let team;
    let first;

    for(let i = 0; i < dataOriginal.length; i++) {
        if(dataOriginal[i].__typename === "MdxPage") {
            data.push(dataOriginal[i]);
        }
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].title === "Team") {
            team = data[i];
        }
    }

    //first = data[0];
    //data[0] = team;


    return data;
}

export default modifyGrid;