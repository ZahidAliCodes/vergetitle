const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
      let hasError = false;

      const fields = form.querySelectorAll('input, textarea'); 

      fields.forEach(field => {
        const label = field.closest('.form-row').querySelector('label');

        if (!field.value.trim()) {
          field.classList.add('error');
          label.classList.add('error');
          hasError = true;
        } else {
          field.classList.remove('error');
          label.classList.remove('error');
        }
      });

      if (hasError) {
        e.preventDefault();
      }
    });

    const fields = form.querySelectorAll('input, textarea'); 
    fields.forEach(field => {
      field.addEventListener('input', () => {
        const label = field.closest('.form-row').querySelector('label');
        if (field.value.trim()) {
          field.classList.remove('error');
          label.classList.remove('error');
        }
      });
    });