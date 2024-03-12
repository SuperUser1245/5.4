function ex(obj, str){
  for (let key in obj){
    if (key == str) {
      return true;
    }else{
      return false;
    } 
  }
}

