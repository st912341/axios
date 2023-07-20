const { default: axios } = require("axios");


// GET REQUEST
function getTodos() {
    axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/'
    }).then(res=>console.log(res)).catch(err=>console.error(err));
  }
  
  // POST REQUEST
  function addTodo() {
    axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data: 
        {title:'New tudo', completed: false}
            }).then(res=>showOutput(res)).catch(err=>console.error(error));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios({
        method:'put',
        url:'https://jsonplaceholder.typicode.com/todos/2',
        data: 
        {title:'updated todo ', completed: false}
            }).then(res=>showOutput(res)).catch(err=>console.error(error));
  }
  
  
  // DELETE REQUEST
  function removeTodo() {
    axios({
        method:'delete',
        url:'https://jsonplaceholder.typicode.com/todos/2',
            }).then(res=>showOutput(res)).catch(err=>console.error(error));
  }
  
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([axios.get('https://jsonplaceholder.typicode.com/posts')],
     axios.get(['https://jsonplaceholder.typicode.com/posts/1'])).
     then(res=>showOutput(res)).catch(err=>console.error(error));}
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click',getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);