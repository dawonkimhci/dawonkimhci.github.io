---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<h3>News</h3>
<div id="newsContent" style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line1">
            <span onclick="toggleDescription('desc1', this)" style="cursor: pointer;">10 October 2024 news</span>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line2">
            <span onclick="toggleDescription('desc2', this)" style="cursor: pointer;">11 October 2024 news</span>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line3">
            <span onclick="toggleDescription('desc3', this)" style="cursor: pointer;">12 October 2024 news</span>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId, titleElement) {
        var description = document.getElementById(descId);
        var parentLi = titleElement.parentElement; // The <li> element

        if (description.style.display === "none") {
            description.style.display = "block";
            parentLi.style.lineHeight = "1.4"; // Description 펼쳐졌을 때 행간 좁힘
        } else {
            description.style.display = "none";
            parentLi.style.lineHeight = "2.0"; // 접혔을 때 제목 사이 행간 넓힘
        }
    }
</script>
<br> 