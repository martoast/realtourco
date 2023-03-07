<template>
    <div class="section-video">
        <div class="section-video-media">
            <video playsinline="true" autoplay muted loop style="height: 100%; width: 100%; object-fit: cover;">
                <source src="/video/main2.mp4" type="video/mp4">
            </video>
        </div>
        
        <div class="section-video-wrapper container">
        <div class="section-video-content text-center text-lg-left mx-auto mx-lg-0">
        <h1 class="display-5 fw-bold text-white">Virtual Tours Made Real</h1>
        <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-white">Experience Real Estate Virtual Tours like Never Before with RealTourCo - Your Ultimate Virtual Tour Solution</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="#Contact" style="text-decoration: none;">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get a free consultation</button>
            </a>
        </div>
        </div>
        </div>
        </div>

    </div>
    
</template>

<style scoped>


.section-video {
    position: relative;
    padding: 7.5rem 0;
    background-color: rgba(0, 0, 0, .4);
}

@media (min-width: 991px) {
    .section-video {
    position: relative;
    height: calc(100vh - 88px);
    background-color: rgba(0, 0, 0, .4);
}
    

}
.section-video-media {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}

.section-video-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    height: 100%;
    -ms-flex-pack: center;
    justify-content: center;
}
</style>