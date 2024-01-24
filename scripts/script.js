document.querySelectorAll('.product').forEach(product => {
    // Line 1: Deze regel gaat door het gehele html bestand heen om de class .product te vinden en gaat het volgende uitvoeren

    product.addEventListener('mouseenter', () => {
        // Line 2-3: Dit zegt praktisch gezien, doe iets met het .product class als de muis eroverheen hovert.

        const sizeMenu = product.querySelector('.size-menu');
        // Line 4: Deze code zoekt in de .product items de items met de class .size-menu

        sizeMenu.classList.add('visible');
        // Line 5: Dit geeft de Sizemenu de class visible zodat het element de css pakt van de .size-menu.visible waar de opacity op 1 komt te staan en het menu weergeeft
    });

    product.addEventListener('mouseleave', () => {
        // Line 6-7: Dit zorgt ervoor dat er iets moet gebeuren als de muis weggaat
        

        const sizeMenu = product.querySelector('.size-menu');
        // Line 8: Dit zoekt opnieuwe de .size-menu class in de .product class

        sizeMenu.style.transition = 'opacity 0s';
        // Line 9: ik verander hier dat de opacity van het menu meteen moet veranderen. Anders had ik een fade-out en die heeft gymshark ook niet.

        sizeMenu.style.opacity = '0';
        // Line 10: gooit de opacity van het menu naar 0

        setTimeout(() => {
            // Line 11-12: Dit reset kort alles terug naar normaal

            sizeMenu.classList.remove('visible');
            // Line 13: haalt de classlist visible weg en het artikel pakt de orginele stijling

            sizeMenu.style.transition = '';
            sizeMenu.style.opacity = '';
            // Line 14-15: Dit reset de stijlveranderingen die eerder is gemaakt.
        }, 50); // De pauze is maar 50 miliseconden voordat het terug reset
    });
});
