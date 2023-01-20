window.addEventListener('DOMContentLoaded', () => {
    function initCanvasMenu() {
        var btn = document.querySelector('[data-canvas-btn]');
        var menu = document.querySelector('[data-canvas-menu]');

        if(!btn || !menu) {
            return;
        }
        btn.addEventListener('click', (ev) => {
            if(btn.classList.contains('open')) {
                btn.classList.remove('open');

                if(menu.classList.contains('open')) {
                    menu.classList.remove('open');
                }
                return;
            }

                btn.classList.add('open');

                if(!menu.classList.contains('open')) {
                    menu.classList.add('open');
                }
        })
    }
    initCanvasMenu()
})



// function initCanvasMenu() {
//     var btn = document.querySelector('[data-canvas-btn]');
//     var menu = document.querySelector('[data-canvas-menu]');

//     if(!btn || !menu) {
//         return;
//     }
//     btn.addEventListener('click', (ev) => {
//         if(menu.classList.contains('open')) {
//             menu.classList.remove('open');
//             return;
//         }

//         menu.classList.add('open');
//     })
// }
// initCanvasMenu()