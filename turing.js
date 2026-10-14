(function () {
  var form = document.getElementById('turing');
  var recruiterQuestion = document.getElementById('recruiter-question');
  var recruiterMessage = document.getElementById('recruiter-message');
  var contacts = document.getElementById('contacts');

  function answer(name) {
    var checked = form.querySelector('input[name="' + name + '"]:checked');
    return checked ? checked.value : null;
  }

  function update() {
    var human = answer('human');
    var recruiter = answer('recruiter');

    recruiterQuestion.hidden = human !== 'yes';
    recruiterMessage.hidden = !(human === 'yes' && recruiter === 'yes');
    contacts.hidden = !(human === 'yes' && recruiter !== null);
  }

  form.addEventListener('change', update);
  update();
})();
