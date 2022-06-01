var addBtn = document.querySelector('.add-btn');
var container = document.querySelector('.container');

var cards = localStorage.getItem('cards') === null ? [] : JSON.parse(localStorage.getItem('cards'));

var addCards = (value="") => {
  var noteContainer = document.createElement('div');
  noteContainer.className = 'note-container';

  noteContainer.innerHTML = `
    <div class="toolbar">
      <input type="color" class="color">
      <button class="save-edit-btn save"></button>
      <button class="delete-btn"></button>
    </div>
    <div class="note-div"></div>
    <textarea class="note-text" placeholder="Your note ..."></textarea>
  `

  container.appendChild(noteContainer);

  var saveBtn = noteContainer.querySelector('.save-edit-btn');
  var deleteBtn = noteContainer.querySelector('.delete-btn');
  var noteDiv = noteContainer.querySelector('.note-div');
  var noteText = noteContainer.querySelector('.note-text');
  var color = noteContainer.querySelector('.color');

  if (value) {
    noteDiv.innerText = value;
    noteText.value = value;
  }

  saveBtn.addEventListener('click', () => {
    if (saveBtn.classList.contains('save')) {
      saveBtn.classList.remove('save');
      saveBtn.classList.add('edit');
      noteDiv.innerHTML = noteText.value;
      noteText.style.display = 'none';
      noteDiv.style.display = 'flex';

      var notes = []
      var noteDivs = document.querySelectorAll('.note-div');
      noteDivs.forEach(note => notes.push(note.innerText));
      localStorage.setItem('cards', JSON.stringify(notes));
    }
    else {
      saveBtn.classList.add('save');
      saveBtn.classList.remove('edit');
      noteDiv.style.display = 'none';
      noteText.style.display = 'flex';
    }
  });

  deleteBtn.addEventListener('click', () => {
    noteContainer.remove();

    setTimeout(() => {}, 300);

    var notes = []
    var noteDivs = document.querySelectorAll('.note-container .note-div');
    console.log(noteDivs)
    noteDivs.forEach(note => notes.push(note.innerText));

    localStorage.setItem('cards', JSON.stringify(notes));
  });

  color.addEventListener('input', () => {
    noteDiv.style.color = color.value;
    noteText.style.color = color.value;
  });
}

cards.forEach(card => addCards(card));

addBtn.addEventListener('click', () => addCards());
