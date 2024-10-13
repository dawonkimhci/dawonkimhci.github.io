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
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line1">
            <div class="news-line" onclick="toggleDescription('desc1')" style="cursor: pointer;">
                <span>10 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon1" style="cursor: pointer;"></i>
            </div>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line2">
            <div class="news-line" onclick="toggleDescription('desc2')" style="cursor: pointer;">
                <span>11 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon2" style="cursor: pointer;"></i>
            </div>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line3">
            <div class="news-line" onclick="toggleDescription('desc3')" style="cursor: pointer;">
                <span>12 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon3" style="cursor: pointer;"></i>
            </div>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<!-- PRESS -->
<h3>Press</h3>
<div id="pressContent" style="max-width: 1200px; margin: 0 auto; padding: 0 40px;">
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="press-item" style="line-height: 1.5;">
            <hr id="line4">
            <div class="press-line" onclick="toggleDescription('desc4')" style="cursor: pointer;">
                <span>5 October 2024 press release about new product launch!</span>
                <i class="fas fa-angle-down" id="icon4" style="cursor: pointer;"></i>
            </div>
            <div id="desc4" class="description" style="display: none; margin-left: 20px;">
                * description for 5 October 2024 press release
            </div>
        </li>
        <li class="press-item" style="line-height: 1.5;">
            <hr id="line5">
            <div class="press-line" onclick="toggleDescription('desc5')" style="cursor: pointer;">
                <span>15 September 2024 press coverage on international news</span>
                <i class="fas fa-angle-down" id="icon5" style="cursor: pointer;"></i>
            </div>
            <div id="desc5" class="description" style="display: none; margin-left: 20px;">
                * description for 15 September 2024 press coverage
            </div>
        </li>
        <li class="press-item" style="line-height: 1.5;">
            <hr id="line6">
            <div class="press-line" onclick="toggleDescription('desc6')" style="cursor: pointer;">
                <span>23 August 2024 press interview with CEO about company growth</span>
                <i class="fas fa-angle-down" id="icon6" style="cursor: pointer;"></i>
            </div>
            <div id="desc6" class="description" style="display: none; margin-left: 20px;">
                * description for 23 August 2024 press interview
            </div>
        </li>
    </ul>
</div>

<style>
    .news-line, .press-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .news-line span, .press-line span {
        flex: 1;
    }
</style>

<script>
    function toggleDescription(descId) {
        var description = document.getElementById(descId);
        var icon = document.getElementById('icon' + descId.slice(-1)); // 아이콘을 id로 찾음

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