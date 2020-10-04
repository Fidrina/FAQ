window.onload = function () {
    const FAQIcon = document.querySelector("#faq-icon");

    FAQIcon.addEventListener("click", (e) => {
        const FAQContent = document.querySelector("#faq-content");

        FAQContent.classList.toggle("hidden");
    });
}