function sendEmail(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('New photography inquiry from ' + name);
  const body = encodeURIComponent(
`Hi Pranesh,

My name is ${name} (${email}).
${message}

Thanks!`
  );

  window.location.href = `mailto:pranesh@example.com?subject=${subject}&body=${body}`;
}

(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
