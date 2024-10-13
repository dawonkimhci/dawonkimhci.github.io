---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<h3>News</h3>
<div id="newsContent">
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line1"> <!-- 라인이 항상 보이도록 수정 -->
            <i class="fas fa-angle-down" onclick="toggleDescription('desc1', this)" style="cursor: pointer;"></i>
            10 October 2024 news
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line2">
            <i class="fas fa-angle-down" onclick="toggleDescription('desc2', this)" style="cursor: pointer;"></i>
            11 October 2024 news
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 2.0;">
            <hr id="line3">
            <i class="fas fa-angle-down" onclick="toggleDescription('desc3', this)" style="cursor: pointer;"></i>
            12 October 2024 news
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<script>
    function toggleDescription(descId, icon) {
        var description = document.getElementById(descId);
        var parentLi = icon.parentElement; // The <li> element

        if (description.style.display === "none") {
            description.style.display = "block";
            parentLi.style.lineHeight = "1.4"; // Description 펼쳐졌을 때 행간 좁힘
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            description.style.display = "none";
            parentLi.style.lineHeight = "2.0"; // 접혔을 때 제목 사이 행간 넓힘
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    }
</script>


<br> 