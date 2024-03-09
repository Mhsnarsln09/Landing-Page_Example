<template>
    <div class="o_b_a background-green">
        <div class="o_b_a_container">
            <div class="o_b_a_col custom_col">
                <div class="o_b_a_title custom_row justify-content-center mb-3">İş İlanlarımız</div>
                <div class="o_b_a_button custom_row justify-content-end">
                    <Button class="outline-none" rounded icon="pi pi-angle-left" severity="contrast" outlined
                        style="color: white;" @click="prevClick"/>
                    <Button icon="pi pi-angle-right" rounded severity="contrast" outlined class="ml-2"
                        style="color: white;" @click=nextClick />
                </div>
                <div class="o_b_a_carousel custom_row mt-4">
                    <Carousel :pt="{root:'o_b_a_root',nextButton:'next_button', previousButton:'prev_button'}" :value="jobPostings" :numVisible="4" :numScroll="4" :showIndicators="false" :responsiveOptions="responsiveOptions">
                        <template #item="slotProps">
                            <div class="o_b_a_card">
                                <div class="o_b_a_card_root">
                                    <div class="o_b_a_card_img">
                                    <img :src="imgSrc(slotProps.data.img)"
                                        style="object-fit: cover;border-radius: 50%;">
                                </div>
                                <div class="o_b_a_card_title">
                                    {{ slotProps.data.title }}
                                </div>
                                <div class="o_b_a_card_subtitle">{{ slotProps.data.id }} Açık Pozisyon</div>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const jobPostings = ref<Array<any>>([
    { id: 1, title: 'Satış Elemanı', img: '../../../assets/satis-elemani.png' },
    { id: 2, title: 'Üretim / İmalat', img: "../../../assets/uretim.png" },
    { id: 3, title: 'Pazarlama', img: "../../../assets/pazarlama.png" },
    { id: 4, title: 'İnsan Kaynakları', img: "../../../assets/ik.png" },
    { id: 5, title: 'Satış Elemanı', img: '../../../assets/satis-elemani.png' },
    { id: 6, title: 'Üretim / İmalat', img: "../../../assets/uretim.png" },
    { id: 7, title: 'Pazarlama', img: "../../../assets/pazarlama.png" },
    { id: 8, title: 'İnsan Kaynakları', img: "../../../assets/ik.png" },
    { id: 9, title: 'Pazarlama', img: "../../../assets/pazarlama.png" },
    { id: 10, title: 'İnsan Kaynakları', img: "../../../assets/ik.png" },
])

const imgSrc = (img: string) => {
    return new URL(img, import.meta.url).href
}

const nextClick = () => {
    let nextButton = document.querySelector('.next_button') as any
    nextButton.click();
}

const prevClick = () => {
    let prevButton = document.querySelector('.prev_button') as any
    prevButton.click();
}
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
]);
</script>

<style scoped>
.o_b_a_container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 500px;
    max-width: 1200px;
    transition: scale 0.3s ease;
    color: white;
}

.o_b_a_col {
    width: 100%;
    padding: 70px 0;
}

.o_b_a_title {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

}

.o_b_a_card{
    cursor: pointer;
}

.o_b_a_card_root{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.o_b_a_card_title {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    ;
    margin-top: 16px;
}

.o_b_a_card_subtitle {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 12px;
}

.o_b_a_carousel :deep(.p-carousel-next) {
    display: none;
}

.o_b_a_carousel :deep(.p-carousel-prev) {
    display: none;
}

@media(max-width: 1300px) {
    .o_b_a_container {
        scale: 0.9;
    }
}
@media(max-width: 992px) {
    .o_b_a_container {
        scale: 0.8;
    }
}
</style>

<style>
.o_b_a_root {
    width: 100%;
}
</style>
