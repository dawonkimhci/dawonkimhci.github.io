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
            10 October 2024 news
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc1', this)" style="cursor: pointer;"></i>
            <hr style="display: none;" id="line1">
            <div id="desc1" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li>
            11 October 2024 news
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc2', this)" style="cursor: pointer;"></i>
            <hr style="display: none;" id="line2">
            <div id="desc2" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li>
            12 October 2024 news
            <i class="fas fa-chevron-down" onclick="toggleDescription('desc3', this)" style="cursor: pointer;"></i>
            <hr style="display: none;" id="line3">
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