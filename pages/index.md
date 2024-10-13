---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<!-- NEWS -->
<h3>News</h3>
<div id="newsContent" style="max-width: 1200px; margin: 0 auto; padding: 0 30px;"> <!-- 좌우 간격을 늘림 -->
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line1">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc1')"></i>
            <span onclick="toggleDescription('desc1')" style="cursor: pointer;">10 October 2024 news accepted international conference paper!</span>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line2">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc2')"></i>
            <span onclick="toggleDescription('desc2')" style="cursor: pointer;">11 October 2024 news accepted international conference paper!</span>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line3">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc3')"></i>
            <span onclick="toggleDescription('desc3')" style="cursor: pointer;">12 October 2024 news accepted international conference paper!</span>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId) {
        var description = document.getElementById(descId);
        var icon = document.querySelector("[onclick=\"toggleDescription('" + descId + "')\"]");

        if (description.style.display === "none") {
            description.style.display = "block";
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            description.style.display = "none";
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    }
</script>

<br> 