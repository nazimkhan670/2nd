
const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menuitem")

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform= 'translateX({})';
    });
});


