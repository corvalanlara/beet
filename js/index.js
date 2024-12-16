document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function changeURL() {
  const url = new URL(location);
  url.searchParams.set("form", "enviado");
  history.pushState({}, "", url);
}

async function beforeSubmit() {
  const url = await changeURL();
  return true;
}

const speed = 8000;

function scroll(speed) {
    $('.marco').animate({ scrollTop: $(this).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    })
}

scroll(speed)
setInterval(function(){scroll(speed)}, speed * 2);

if (document.URL.includes("?message=sent#contacto")) {
	alert("Mensaje enviado exitosamente");
}
