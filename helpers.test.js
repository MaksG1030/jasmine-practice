function appendDeleteBtn(tr, type) {
    let newTd = document.createElement('td');
    newTd.className = 'deleteBtn';
    newTd.innerText = 'X';
  
    newTd.addEventListener('click', removeEle);
  
    tr.append(newTd);
  }
  
  function removeEle(evt) {
    let ele = evt.target.closest('tr');
  
    delete allServers[ele.id];
  
    ele.parentNode.removeChild(ele);
    updateServerTable();
  }