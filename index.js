// Code your solution here
function findMatching(drivers, string){
      return drivers.filter(name=> {
         return name.toLowerCase()===string.toLowerCase()
         
     })
    
}
function fuzzyMatch(drivers, string){
    return drivers.filter(name => {
        return name.toLowerCase().indexOf(string.toLowerCase())===0
    })
}

function matchName(drivers,string){
 return drivers.filter(driver => {
     return driver.name.toLowerCase()===string.toLowerCase()
 })
}