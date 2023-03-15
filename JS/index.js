/* <!DOCTYPE html>
<script>
"use strict";

(async () => {
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
})()
</script>

*/
exportasync function listEvents(){
try{
    const url = http://127.0.0.1:5500/index.html
const response =await fetch(url);
const data = await response.json();
console.log(error);


} catch(error) {
    console
}


}