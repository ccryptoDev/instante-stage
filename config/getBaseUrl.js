module.exports.getBaseUrl =  getBaseUrl();

function getBaseUrl(){
  // TODO: Verify production config
  if(process.env.NODE_ENV === 'development') {
    // return "http://istante.alchemylms.com/";
    //return "http://localhost:18189";
	//return "http://snsdev7:18189";
	//return "http://ec2-35-165-249-11.us-west-2.compute.amazonaws.com";
	//return "http://ec2-35-165-20-111.us-west-2.compute.amazonaws.com";
	return "http://localhost:18189/";
  } else if(process.env.NODE_ENV === 'staging') {
    //return "http://snsdev7:18189";
    //return "http://localhost:8000";
    return "https://istante.alchemylms.com/";
  } else if(process.env.NODE_ENV === 'uat') {
    //return "http://snsdev7:18189";
    return "https://istante.alchemylms.com/";
  } else if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') {
    //return "http://snsdev7:18189";
    return "https://api.istantelending.com";
  } else{
    //return "http://localhost:18189";
	//return "http://snsdev7:18189";
	//return "http://ec2-35-165-249-11.us-west-2.compute.amazonaws.com";
  //return "http://ec2-35-165-20-111.us-west-2.compute.amazonaws.com";
  return "https://istante.alchemylms.com/";
	//return "http://snsdev7:18189";
  }
}
