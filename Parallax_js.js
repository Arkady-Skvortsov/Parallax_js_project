document.addEventListener('mousemove', function(event) {
        let layers = document.querySelectorAll('.layers');

        layers.forEach((layer) => {   
              let get_A = layer.getAttribute('data-speed');

              layer.style.transform = `translateX(${event.clientX * get_A / 4000}px) translateY(${event.clientY * get_A / 9000}px)`;
        });
    	});