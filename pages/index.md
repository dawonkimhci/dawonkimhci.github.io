---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<h3 onclick="toggleNews()" style="cursor: pointer;">News</h3>
<div id="newsContent" style="display: none;">
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    </ul>
</div>

<script>
    function toggleNews() {
        var content = document.getElementById("newsContent");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }
</script>
<br> 