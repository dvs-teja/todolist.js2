const ans = document.getElementById('input1');
const ele = document.getElementById('adding');

function add() {
  let li = document.createElement('h3');
  let button = document.createElement('button');
  
  button.style.backgroundColor = '#4CAF50'; 
  button.style.color = 'white'; 
  button.style.border = 'none'; 
  button.style.padding = '10px 20px'; 
  button.style.textAlign = 'center'; 
  button.style.textDecoration = 'none'; 
  button.style.display = 'inline-block'; 
  button.style.fontSize = '16px'; 
  button.style.margin = '4px 2px'; 
  button.style.cursor = 'pointer'; 

  button.textContent = 'DELETE';
  button.onclick=deletee;
  li.style.display = 'flex'; 
  li.style.alignItems = 'center'; 
  li.style.justifyContent = 'space-between'; 
  li.style.marginBottom = '10px'; 
  
  li.innerHTML = ans.value;
  li.appendChild(button);
  
  ans.value = '';
  
  ele.appendChild(li);
}
function deletee(event){
  const button = event.target;
  const li = button.parentElement;
  li.remove();

}