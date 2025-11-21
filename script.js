// small JS for nav toggle and form mailto fallback
document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click',()=> {
    const nav = btn.nextElementSibling || document.getElementById('main-nav');
    if(nav) nav.classList.toggle('show');
  });
});

// Demo form handler: open mail client with prefilled content as fallback (works without a server)
function handleDemoSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value || '');
  const org = encodeURIComponent(form.org.value || '');
  const email = encodeURIComponent(form.email.value || '');
  const phone = encodeURIComponent(form.phone.value || '');
  const message = encodeURIComponent(form.message.value || '');
  const subject = encodeURIComponent('MedSynk Demo Request from ' + (form.name.value || ''));
  const body = encodeURIComponent(
    'Name: ' + (form.name.value || '') + '\n' +
    'Organization: ' + (form.org.value || '') + '\n' +
    'Email: ' + (form.email.value || '') + '\n' +
    'Phone: ' + (form.phone.value || '') + '\n\n' +
    (form.message.value || '')
  );

  // Try to open user's mail client
  const mailto = 'mailto:drprao63@medsynk.health?subject=' + subject + '&body=' + body;
  window.location.href = mailto;
}
