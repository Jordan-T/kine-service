const form = document.querySelector('form.formBilan');

if (form.length) {
  const select = document.getElementById('bilan_pb');
  const sections = form.querySelectorAll('.bilan_pb');
  const HIDDEN_CLASS = 'd-none';

  const onChange = (e) => {
    const sectionNumber = e.target.value;
    const sectionClass = `bilan_pb_${sectionNumber}`;

    sections.forEach((section) => {
      if (section.classList.contains(sectionClass)) {
        section.classList.remove(HIDDEN_CLASS);
      } else {
        section.classList.add(HIDDEN_CLASS);
      }
    });
  };

  let tempFirstError;
  const onInvalid = () => {
    if (tempFirstError === undefined) {
      tempFirstError = form.querySelector('input:invalid,select:invalid');

      const rect = tempFirstError.getBoundingClientRect();
      const currentTop = window.scrollY;
      const top = rect.top - 100 + currentTop;

      requestAnimationFrame(() => {
        window.scrollTo(0, currentTop);
        requestAnimationFrame(() => {
          window.scrollTo({ top, left: 0, behavior: 'smooth' });
          tempFirstError.focus();
          tempFirstError = undefined;
        });
      });
    }
  };

  select.addEventListener('change', onChange);
  form.addEventListener('invalid', onInvalid, true);
}
