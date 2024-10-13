---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<h3>News</h3>
<div id="newsContent">
    <ul style="list-style-type: none; padding-left: 0;">
        <li>
            <hr style="display: none;" id="line1">
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc1', this)" style="cursor: pointer;"></i>
            10 October 2024 news
            <div id="desc1" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li>
            <hr style="display: none;" id="line2">
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc2', this)" style="cursor: pointer;"></i>
            11 October 2024 news
            <div id="desc2" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li>
            <hr style="display: none;" id="line3">
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc3', this)" style="cursor: pointer;"></i>
            12 October 2024 news
            <div id="desc3" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId, icon) {
        var description = document.getElementById(descId);
        var line = document.getElementById("line" + descId.slice(-1)); // To match the line with the description

        if (description.style.display === "none") {
            description.style.display = "block";
            line.style.display = "block";
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            description.style.display = "none";
            line.style.display = "none";
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
</script>

<br> 