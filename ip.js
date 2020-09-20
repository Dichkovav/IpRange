function ipAddressToLong(ip){
  return ip.split('.').map((octet, index, array) => {
      return parseInt(octet) * Math.pow(256, (array.length - index - 1));
    }).reduce((prev, curr) => {
      return prev + curr;
  });
}
 
 const ipRange = { 
    ipRangeSize: function ipRangeSize (ip1, ip2) {
  
      let res1 = ipAddressToLong(ip1)
      let res2 = ipAddressToLong(ip2)
      let finalResult =  res1 - res2
      finalResult = Math.abs(finalResult)
      return finalResult + 1;
    }
 }

module.exports = ipRange;




