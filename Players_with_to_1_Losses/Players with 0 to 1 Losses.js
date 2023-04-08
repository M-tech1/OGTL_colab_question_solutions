const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];

function sorter(match) {
  let myarr1 = [];
  let myarr2 = [];
  
  // iterating and sorting
  for (let i = 0; i < match.length; i++) {
    myarr1.push(match[i][0]);
    myarr2.push(match[i][1]);
  }
  
  // removing losers in winners in arr1
  myarr2.forEach(each_element => {
    if (myarr1.includes(each_element)) {
      myarr1.splice(myarr1.indexOf(each_element), 1);
    }
  });
  
  // remove member that appear more than once
  let tempArr = [...new Set(myarr2)];
  myarr2.forEach(each_member => {
    for (let a = 0; a < tempArr.length; a++) {
      if (myarr2.filter(item => item === tempArr[a]).length > 1) {
        myarr2.splice(myarr2.indexOf(tempArr[a]), 1);
      }
    }
  });
  
  // Arranging into final array
  let finalArr = [];
  finalArr.push([...new Set(myarr1)].sort());
  finalArr.push(myarr2.sort());
  
  console.log(finalArr);
}

sorter(matches);
