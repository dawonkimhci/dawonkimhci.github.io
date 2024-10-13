---
layout: default
permalink: /
---

{% include landing.html %}
<br>
<!-- NEWS -->
<h3>News</h3>
<div id="newsContent" style="max-width: 800px; margin: 0 auto; padding: 0 40px;">
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line1">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc1')"></i>
            <span class="news-title" onclick="toggleDescription('desc1')" style="cursor: pointer;">10 October 2024 news accepted international conference paper!</span>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line2">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc2')"></i>
            <span class="news-title" onclick="toggleDescription('desc2')" style="cursor: pointer;">11 October 2024 news accepted international conference paper!</span>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line3">
            <i class="fas fa-angle-down" style="cursor: pointer; margin-right: 10px;" onclick="toggleDescription('desc3')"></i>
            <span class="news-title" onclick="toggleDescription('desc3')" style="cursor: pointer;">12 October 2024 news accepted international conference paper!</span>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<style>
    .news-title {
        display: inline-block;
        text-indent: -24px;  /* 아이콘 크기만큼 음수 값으로 들여쓰기 조정 */
        padding-left: 34px;  /* 아이콘과 텍스트 사이에 여백을 주기 위해 padding 추가 */
        vertical-align: top;
    }
</style>

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