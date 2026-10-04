```javascript
/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile");

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile");

    });

});


/* ================= FAQ ================= */

const faqButtons =
    document.querySelectorAll(".faq-item button");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentItem =
            button.parentElement;

        document
            .querySelectorAll(".faq-item")
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("open");

                }

            });


        currentItem.classList.toggle("open");

    });

});


/* ================= MODAL ================= */

const dealBtn =
    document.getElementById("dealBtn");

const modal =
    document.getElementById("dealModal");

const closeModal =
    document.getElementById("closeModal");


function openModal() {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeDealModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

}


dealBtn.addEventListener(
    "click",
    openModal
);


closeModal.addEventListener(
    "click",
    closeDealModal
);


/* ================= CLICK OUTSIDE MODAL ================= */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeDealModal();

    }

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeDealModal();

    }

});


/* ================= DEAL FORM ================= */

const dealForm =
    document.getElementById("dealForm");

const successMessage =
    document.getElementById("successMessage");


dealForm.addEventListener("submit", (event) => {

    event.preventDefault();


    dealForm.style.display = "none";

    successMessage.classList.add("show");


    setTimeout(() => {

        closeDealModal();

        dealForm.reset();

        dealForm.style.display = "grid";

        successMessage.classList.remove("show");

    }, 2200);

});


/* ================= HEADER SHADOW ================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");


    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 25px rgba(20,40,70,.06)";

    } else {

        header.style.boxShadow = "none";

    }

});
```
