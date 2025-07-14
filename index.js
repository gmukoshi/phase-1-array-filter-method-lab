//finding match dirvers names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
//finding fuzzymatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
//finding matchname
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
      