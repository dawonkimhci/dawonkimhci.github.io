---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<!-- NEWS -->
<h3>News</h3>
<div id="newsContent" style="max-width: 1200px; margin: 0 auto; padding: 0 40px;"> 
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line1">
            <i class="fas fa-angle-down" onclick="toggleDescription('desc1', this)" style="cursor: pointer; margin-right: 10px;"></i>
            <span onclick="toggleDescription('desc1', this)" style="cursor: pointer;">10 October 2024 news</span>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line2">
            <i class="fas fa-angle-down" onclick="toggleDescription('desc2', this)" style="cursor: pointer; margin-right: 10px;"></i>
            <span onclick="toggleDescription('desc2', this)" style="cursor: pointer;">11 October 2024 news</span>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line3">
            <i class="fas fa-angle-down" onclick="toggleDescription('desc3', this)" style="cursor: pointer; margin-right: 10px;"></i>
            <span onclick="toggleDescription('desc3', this)" style="cursor: pointer;">12 October 2024 news</span>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId, element) {
        var description = document.getElementById(descId);
        var icon = element.previousElementSibling || element; // 아이콘이 이전 요소이므로 해당 아이콘을 찾음

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