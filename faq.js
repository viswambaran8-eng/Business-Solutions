    function toggleFaq(index) {
      const answers = document.querySelectorAll(".faq-answer");
      const btns = document.querySelectorAll(".faq-btn");

      answers.forEach((ans, i) => {
        if (i === index) {
          const open = ans.style.display === "block";
          ans.style.display = open ? "none" : "block";
          btns[i].innerText = open ? "+" : "−";
        } else {
          ans.style.display = "none";
          btns[i].innerText = "+";
        }
      });
    }

    /* SEARCH FUNCTION */
    function searchFaq() {
      const input = document.querySelector(".faq-search").value.toLowerCase();
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item, index) => {
        const text = item.innerText.toLowerCase();
        const answer = item.nextElementSibling;

        if (text.includes(input)) {
          item.style.display = "flex";
          answer.style.display = "none";
          item.querySelector(".faq-btn").innerText = "+";
        } else {
          item.style.display = "none";
          answer.style.display = "none";
        }
      });
    }