---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<h3>News</h3>
<div id="newsContent">
    <ul>
        <li>
            10 October 2024 news
            <span onclick="toggleDescription('desc1')" style="cursor: pointer;">&#9654;</span>
            <div id="desc1" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li>
            11 October 2024 news
            <span onclick="toggleDescription('desc2')" style="cursor: pointer;">&#9654;</span>
            <div id="desc2" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li>
            12 October 2024 news
            <span onclick="toggleDescription('desc3')" style="cursor: pointer;">&#9654;</span>
            <div id="desc3" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId) {
        var description = document.getElementById(descId);
        if (description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    }
</script>

<br> 