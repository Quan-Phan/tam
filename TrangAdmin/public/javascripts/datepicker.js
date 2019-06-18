function validate() {
    let date = document.getElementById('date').value.split("-")
    let year = date[0]
    let month = date[1]
    let day = date[2]
    date = `${day}/${month}/${year}`
  let isValid =  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(date)
    if(!isValid){
      document.getElementById('error').innerHTML='Nhập sai định dạng'
    }else{
      document.getElementById('error').innerHTML=''
    }
}