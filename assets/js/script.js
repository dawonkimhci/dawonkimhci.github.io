document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('hover-video');

    // 마우스 오버 시 동영상 재생
    video.addEventListener('mouseenter', function () {
        video.play();
        video.muted = false; // 소리도 재생
    });

    // 마우스가 동영상 밖으로 나가면 동영상 정지
    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0; // 동영상 처음으로 되돌리기
    });
});
